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
    pageSize: 3,
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
      page: value
    }).then((
      {
        data,
      }) => {
      this.setState({
        repoList: data,
        isLoading: false,
      });
    })
      .catch(() => {
        this.setState({
          isError: true,
          isLoading: false,
        })
      });
  };

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

    const Description = (<div className={styles.info}>
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
        <div className={styles.img_whs}>
          <img src="data:image/png;base64,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" alt="" />
        </div>
      </div>
    </div>);


    const RepoList = (<div>
      <div className={styles.repo}>
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
      </div>
      <div className={styles.pagination}>
        <Pagination count={pagesCount} page={currentPage} variant="outlined" onChange={this.handleChangePage} />
      </div>
    </div>
    );

    const stylesLoader = <div className={styles.loader}>
      <CircularProgress />
    </div>;

    return (

      <div className={styles.wrap}>
        {isLoading ? stylesLoader : Description}
        {isError ? <div>Возникла ошибка</div> : RepoList}
      </div>
    );
  }
};

export default About;