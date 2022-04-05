import * as React from 'react';
import { Title } from './components/Title.js';
import { LoginForm } from './components/LoginForm.js';
import SideNavbar from './components/SideNavbar.js';
import { SearchBox } from './components/SearchBox.js';
import { Content } from './components/Content.js';
import DetailsComponent from './components/DetailsComponent.js';
import { Route, Router, Switch } from 'react-router';

const drawerWidth = 240;

function App() {

  const [nav_items, setstate] = React.useState([
    {
      id: 100,
      text: "dashboard",
      children: [],
    },
    {
      id: 0,
      text: "database",
      isCollapse: false,
      children: [
        {
          id: 1,
          text: "Global",
          isCollapse: false,
          children: [
            {
              id: 10,
              text: "Users",
              isCollapse: null,
              children: [],
            },
            {
              id: 20,
              text: "Activities",
              isCollapse: null,
              children: [],
            },
            {
              id: 21,
              text: "Roles",
              isCollapse: null,
              children: [],
            },
            {
              id: 11,
              text: "Categories",
              isCollapse: false,
              children: [
                {
                  id: 30,
                  text: "Category Images",
                  isCollapse: null,
                  children: [],
                },
                {
                  id: 31,
                  text: "Category Translations",
                  isCollapse: null,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          text: "Material",
          isCollapse: null,
          children: [],
        },
      ],
    },
  ]);

  const [dashboardState, setDashboardState] = React.useState({
    activeNav: "dashboard",
  });

  const [loginFields, setloginFields] = React.useState({
    email: "",
    password: "",
  });
  const [state, setState] = React.useState({
    left: false,
  });

  const allUsers = [
    {
      id: 1,
      name: "ali",
      img: "images/img3.png",
      description: "some description",
      age: 21,
    },
    {
      id: 2,
      name: "ammar",
      img: "images/img2.jpg",
      description: "some description",
      age: 41,
    },
    {
      id: 3,
      name: "ammar",
      img: "images/img1.jpg",
      description: "some description",
      age: 41,
    },
    {
      id: 4,
      name: "ammar",
      img: "images/img1.jpg",
      description: "some description",
      age: 41,
    },
    {
      id: 5,
      name: "ammar",
      img: "images/img1.jpg",
      description: "some description",
      age: 41,
    },
    {
      id: 6,
      name: "ammar",
      img: "images/img1.jpg",
      description: "some description",
      age: 41,
    },
    {
      id: 7,
      name: "ammar",
      img: "images/img1.jpg",
      description: "some description",
      age: 41,
    },
    {
      id: 8,
      name: "ammar",
      img: "images/img1.jpg",
      description: "some description",
      age: 41,
    },
    {
      id: 9,
      name: "ammar",
      img: "images/img1.jpg",
      description: "some description",
      age: 41,
    },
    {
      id: 10,
      name: "ammar",
      img: "images/img1.jpg",
      description: "some description",
      age: 41,
    },
    {
      id: 11,
      name: "ammar",
      img: "images/img1.jpg",
      description: "some description",
      age: 41,
    },
    {
      id: 12,
      name: "abbas",
      img: "images/img1.jpg",
      description: "some description",
      age: 25,
    },
  ];

  const [users, setUers] = React.useState(allUsers);

  function search(string) {
    setUers(allUsers.filter((user) => user.name.includes(string) && user));
  }

  function chaneActiveNav(activeNavName) {
    setDashboardState({ ...dashboardState, activeNav: activeNavName });
  }

  function dfs(item, item_id) {
    if (item.id === item_id) return item;

    let res = null;
    for (let i of item.children) {
      res = dfs(i, item_id);
      if (res != null) return res;
    }
    return null;
  }

  function toggleNavItem(item_id) {
    setstate(
      nav_items.map((item) => {
        let temp = dfs(item, item_id);

        if (temp != null) {
          console.log(temp);
          if (temp.isCollapse == null) {
            chaneActiveNav(temp.text.toLowerCase());
          } else {
            temp.isCollapse = !temp.isCollapse;
          }
        }

        return item;
      })
    );
  }

  function login(event) {
    event.preventDefault();
    console.log(loginFields);

    // postData("http://127.0.0.1:8000/users/login", loginFields)
    //   .then((response) => {
    //     if (response.isSuccessful == true) {
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  const onChangeEmail = (event) => {
    setloginFields({ ...loginFields, email: event.target.value });
  };
  const onChangePassword = (event) => {
    setloginFields({ ...loginFields, password: event.target.value });
  };
  let loginPage = (
    <div className="App background-img max-height">
      <Title title="Dashboard" />
      <LoginForm
        login={login}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        loginFields={loginFields}
      />
    </div>
  );

  let mainPage = (
    <Router>
      <div className="content-fluid">
        <div className="row w-100">
          <div className="col-3">
            <SideNavbar items={nav_items} onclick={toggleNavItem} />
          </div>
          <div className="col-9">
            <SearchBox search={search} />
            <Switch>
              <Route path="/:topicId">
                <Content items={users} />
              </Route>
              <Route path="/details">
                <DetailsComponent />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );

  return mainPage;
}

export default App;
