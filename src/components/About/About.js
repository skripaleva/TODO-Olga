import React from 'react';
import {
  Octokit,
} from '@octokit/rest';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './About.module.css';
import Pagination from '@material-ui/lab/Pagination';


const octokit = new Octokit();

class About extends React.Component {

  state = {
    isLoading: true,
    repoList: [],
    isError: false,
    userInfo: [],
    username: 'MylnikovaO',
    avatarURL: [],
    userBio: [],
    gitHubLink: '',
    pageSize: 1,
    totalRepoCount: 0,
    currentPage: 1
  };

  componentDidMount() {

    octokit.repos.listForUser({
      username: this.state.username,
      per_page: this.state.pageSize,
    }).then((
      {
        data,
      }) => {
      console.log(data)
      this.setState({
        repoList: data,
        isLoading: false,
      });

    })
      .catch(() => {
        this.setState({
          isError: true,
          isLoading: false,
        });

      });

    octokit.users.getByUsername({
      username: this.state.username,
    }).then(response => {
      console.log(response)
      this.setState({
        avatarURL: response.data.avatar_url,
        name: response.data.name,
        userBio: response.data.bio,
        gitHubLink: response.data.html_url,
        totalRepoCount: response.data.public_repos
      });

    })

      .catch(err => {

        this.setState({
          isLoading: false,
          isError: true,
        });


      });
  }

  handleChangePage = (e, value) => {
    this.setState({ currentPage: value })
    octokit.repos.listForUser({
      username: this.state.username,
      per_page: this.state.pageSize,
      page: this.state.currentPage
    }).then((
      {
        data,
      }) => {
      console.log(data)
      this.setState({
        repoList: data,
        isLoading: false,
        currentPage: value
      });

    })
      .catch(() => {
        this.setState({
          isError: true,
          isLoading: false,
        });

      });

  }

  render() {

    const {
      isLoading,
      repoList,
      isError,
      name,
      avatarURL,
      userBio,
      gitHubLink,
      pageSize,
      totalRepoCount,
      currentPage
    } = this.state;

    let pagesCount = Math.ceil(totalRepoCount / pageSize);

    const Prelouder = (<div className={styles.info}>
      <div className={styles.avatar_wrap}>
        <img src={avatarURL} className={styles.repo_avatar} />
      </div>
      <div>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.bio}>{userBio}</h2>
        <div className={styles.link_github}>
          <img className={styles.img_github} src="https://portal.edu.asu.ru/blocks/exaport/item_thumb.php?item_id=3007&access=hash/24570-416d5448" alt="" />
          Ссылка на GitHub:
        <a href={gitHubLink}>{gitHubLink}</a>
        </div>
      </div>

    </div>);


    const Err = (<div className={styles.repo}>
      <p className={styles.repo_text}>Мои репозитории:</p>
      <ol className={styles.repo_list}>
        {repoList.map(repo => (<li key={repo.id}>
          <div className={styles.wrap_repo}>
            <a href={repo.html_url}
              className={styles.repo_name}>{repo.name}</a>
            <div className={styles.repo_language_and_update}>
              <div className={styles.repo_language}>
                <span className={styles.repo_language_color}></span>
                <span>{repo.language}</span>
              </div>
              <span>{repo.updated_at}</span>
            </div>
          </div>
          <div>
            {repo.description !== '' ? <div className={styles.repo_description}>{repo.description}</div> : 'Описание отсутствует'}
          </div>
        </li>))}
      </ol>
      <div>
        <Pagination count={pagesCount} page={currentPage} variant="outlined" onChange={this.handleChangePage} />
      </div>
    </div>
    );

    const stylesLoader = <div className={styles.loader}>
      <CircularProgress />
    </div>;

    return (

      <div className={styles.wrap}>
        {isLoading ? stylesLoader : Prelouder}
        {isError ? <div>Возникла ошибка</div> : Err}
      </div>
    );

  }

};

export default About;