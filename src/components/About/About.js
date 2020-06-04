import React from 'react';
import {
  Octokit,
} from '@octokit/rest';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './About.module.css';


const octokit = new Octokit();

class About extends React.Component {

  state = {
    isLoading: true,
    repoList: [],
    isError: false,
    userInfo: [],
    username: 'MylnikovaO',
    avatarURL: [],
  };

  componentDidMount () {

    octokit.repos.listForUser({
      username: this.state.username,
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
        });

    });

    octokit.users.getByUsername({
      username: this.state.username,
        }).then(response => {

          this.setState({
            avatarURL: response.data.avatar_url,
            name: response.data.name,
        });

    })

          .catch(err => {

            this.setState({
              isLoading: false,
              isError: true,
            });


        });


    }

    render () {

      const {
        isLoading,
        repoList,
        isError,
        name,
        avatarURL,
      } = this.state;


    const Prelouder = (<div className={styles.info}>
                        <h1 className={styles.name}>{name}</h1>
                      </div>);


    const Err = (<div className={styles.repo}>
                    <div>
                      <img src={avatarURL} className={styles.repo_avatar} />
                    </div>
                    <div>
                      <p className={styles.repo_text}> Мои репозитории:</p>
                      <ol className={styles.repo_list}>
                        {repoList.map(repo => (<li key={repo.id}>
                          <a href={repo.id}
                            className={styles.repo_name}>{repo.name}</a>
                        </li>))}
                      </ol>
                    </div>
                  </div>);

    const stylesLoader = (<div className={styles.loader}> 
                          <CircularProgress /> 
                         </div>);

    return (

          <div className={styles.wrap}>
            {isLoading ? stylesLoader : Prelouder}
            {isError ? <div>Возникла ошибка</div> : Err}
          </div>
        );

    }

};

export default About;