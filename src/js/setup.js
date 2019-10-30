import fav from '../img/favicon.ico';
import layout from '../js/layout';
import systemManager from '../js/logic';

const sm = systemManager;

const setup = {
  counterProj: 1,
  counterTask: 1,

  setFavicon: () => {
    const setFav = document.getElementById('favicon');
    setFav.href = fav;
  },
  setProjectInit: () => {
    const demo = sm.ProjectManager.newProject(
      setup.counterProj,
      'Project Demo'
    );

    if (localStorage.length < 1) {
      const currentDate = new Date();
      const taskInit = sm.todoItem(
        setup.counterTask,
        'Test task',
        'Hi!',
        currentDate.toLocaleDateString("en-US")
      );
      demo.tasks.push(taskInit);
      localStorage.setItem(setup.counterProj, JSON.stringify(demo));
    } else {
      if (localStorage.length > 0) {
        const keys = Object.keys(localStorage);
        keys.forEach((key) => {
          setup.setColumnInit(JSON.parse(localStorage.getItem(key)));
        });
      }
    }
    setup.getProjectsNum();
    return demo;
  },
  setColumnInit: (project) => {
    layout.column(project);
    layout.loadTask(project);
    layout.taskProjectButton(project);
  },
  getProjectsNum: () => {
    setup.counterProj = localStorage.length + 1;
  },
  getTaskNum: () => {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      const proj = JSON.parse(localStorage.getItem(key));
      setup.counterTask += proj.tasks.length;
    });
    setup.counterTask += 1;
  }
};

export default setup;
