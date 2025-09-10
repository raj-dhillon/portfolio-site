const projects = [
    {
        title: 'DevOps Pipeline',
        imgUrl: 'assets/devops_pipeline_game.gif',
        stack: ['JavaScript', 'Express.js', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'nginx', 'Hetzner VPS', 'Phaser.js'],
        link: 'https://github.com/raj-dhillon/devops-portfolio',
        desc: 'This is a project that focuses on creating a DevOps pipeline using modern tools and practices. ' +
                'It leverages containerization with Docker, CI/CD with GitHub Actions, and monitoring with Prometheus and Grafana.' +
                ' The project is deployed on a Hetzner VPS and features a simple game built with Phaser.js to demonstrate the pipeline in action.'
    },
    {
        title: 'Intention (Personal CRM)',
        imgUrl: 'assets/intention_app.png',
        stack: ['React Native', 'Expo', 'Flask', 'MySQL', 'WhisperAI', 'GPT', 'Clerk', 'Railway'],
        // link: 'assets/intention_erickson.pptx',
        link: 'https://github.com/Intention00/intention-monorepo-org',
        desc: 'This is a five person team project for my Senior Capstone. ' +
                'Intention uses the user\'s notes about their contacts along with ' +
                'leveraging LLMs to provide them with conversation-starting ' + 
                'questions- allowing them to connect with those who are important to them effortlessly.'
    },
    {
        title: 'Major Schedule Generator',
        imgUrl: 'assets/major_schedule_generator.png',
        stack: ['Python', 'NetworkX'],
        link: 'https://github.com/raj-dhillon/major-schedule-generator',
        desc: 'This was a two person team project for my Algorithm Design course. ' +
                'We took in a csv file containing the major requirements for a student, ' +
                'and returned a schedule they could follow to graduate on time.'
    },
    {
        title: 'Dota or LoL Image Classifier',
        imgUrl: 'assets/dota_lol_classifier.png',
        stack: ['fastai', 'Gradio'],
        link: 'https://huggingface.co/spaces/raj-dhillon/dota_lol',
        desc: 'This was a solo project that I undertook to better understand fastai. ' +
                'It serves to showcase how rapidly you can fine-tune a functional model ' +
                'using conservative hardware, such as my M1 MacBook Air.'
    },
    {
        title: 'Portfolio Site',
        imgUrl: 'assets/portfolio_site.png',
        stack: ['React', 'Tailwind'],
        link: 'https://rajsdhillon.com',
        desc: 'This was a solo project used to showcase my portfolio.',
    },
    {
        title: 'News API CLI',
        imgUrl: 'assets/news_cli.png',
        stack: ['Python'],
        link: 'https://github.com/raj-dhillon/news-cli',
        desc: 'This was a solo project where I learned how to interact with and use third-party APIs in my own code.',
    },
]

export default projects