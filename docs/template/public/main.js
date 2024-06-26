import WorkflowContainer from "./workflow.js"

export default {
    defaultTheme: 'auto',
    iconLinks: [{
        icon: 'github',
        href: 'https://github.com/bonsai-rx/zeromq',
        title: 'GitHub'
    }],
    start: () => {
        WorkflowContainer.init();
    }
}