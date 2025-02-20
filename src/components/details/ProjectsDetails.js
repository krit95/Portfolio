const ProjectsDetails = [{
  id: "8",
  img_src: [
    "res/images/foci.jpg"
  ],
  period: "Jan 2021",
  title: "FOCI Research App",
  keywords: "Android, Kotlin, Firebase",
  tools: "Android Studio, Firebase console",
  content: "Developed Android app to monitor changes in cognition using data from smartphones in people with dementia, sleep apnea, and after a traumatic brain injury. Used in study by Maciej Kos (https://mkos.pl/). Leveraged Android API for location, screen state, app usage, etc. and Google Fit for activity recognition. Built an accessibility service to monitor user typing habits.",
  links: [{
    display_text: "Paper",
    url: "https://www.cognition.nu/about/"
  }]
}, {
  id: "7",
  img_src: [
    "res/images/ydlay.png"
  ],
  period: "May 2020",
  title: "YDlay",
  keywords: "Android, AWS, Kotlin, Golang, Docker, MySQL, REST",
  tools: "Android Studio, GoLand, AWS console + CLI, Docker",
  content: "Built an order and inventory management android app from the ground up. Used Kotlin for frontend, Golang for backend, sqlite3 and MySQL db with redis caching. Deployed using AWS Elastic Beanstalk. The app allows a user to connect with other businesses to place, receive and manage orders in one place.",
  links: [{
    display_text: "APP STORE",
    url: "https://play.google.com/store/apps/details?id=com.tiklyo.ydlay"
  }]
}, {
  id: "6",
  img_src: [
    "res/images/workerb.png"
  ],
  period: "Jan - April 2020",
  title: "workerB",
  subtitle: "Backend developer",
  keywords: "Golang, Docker, MySQL, REST, Redis",
  tools: "GoLand, Docker",
  content: "workerB is a browser automation platform. Its goal is to boost user productivity. I worked on the backend in golang. For local development and testing, we used docker containers to run MySQL database and DGraph.",
  links: [{
    display_text: "DOCS",
    url: "https://docs.workerb.io/"
  }]
}, {
  id: "5",
  img_src: [
    "res/images/speedup_plot.png",
    "res/images/ghc_1.png"
  ],
  period: "Jun - Aug 2019",
  title: "Optimizing compiler inlining with Machine Learning",
  subtitle: "Data Mining Techniques, NEU",
  keywords: "Haskell, GHC, NEAT-python, Genetic Algorithms, Neural Network",
  tools: "GHC, Linux, python3",
  content: "Modified NEAT-python to model and explore topologies for deep Neural Networks, execute our modified Glasgow Haskell Compiler(GHC), and benchmark using NoFib in order to optimize compiler inlining.",
  links: [{
    display_text: "SOURCE CODE",
    url: "https://github.com/krit95/GHC_Inlining_GA_NN"
  }]
}, {
  id: "4",
  img_src: [
    "res/images/rts_1.png",
    "res/images/nst_1.png"
  ],
  period: "Mar - Apr 2019",
  title: "Resource and Colony Management Simulator",
  subtitle: "Game AI course, NEU",
  keywords: "A*, Search-based classical planner, Iterative Depth A*, Memory Bound A*",
  tools: "Unity, C#",
  content: "Developed an AI that can build a plan to get to a target resources stockpile and income. Also built a small resource management game for the AI to play.\nUI built using Unity, scripting in C#.",
  links: [{
    display_text: "SOURCE CODE",
    url: "https://github.com/krit95/Capstone"
  }]
}, {
  id: "3",
  img_src: [
    "res/images/emergency_caller_1.jpg"
  ],
  period: "Feb 2019",
  title: "Emergency Caller",
  subtitle: "Brickhack V, RIT, NY",
  keywords: "Android, FCM, node js, express js, mongoDB",
  tools: "Android Studio, Firebase console, Mongo Compass",
  content: "Built Emergency calling android app which rings callee phone even if on silent/vibrate by leveraging Firebase Cloud Messaging",
  links: [{
    display_text: "SOURCE CODE",
    url: "https://github.com/krit95/EmergencyCaller"
  }]
}, {
  id: "2",
  img_src: [
    "res/images/nst_1.png"
  ],
  period: "Oct - Dec 2018",
  title: "Neural Style Transfer: Analysis and Improvement",
  subtitle: "Foundations of AI course, NEU",
  keywords: "CNN, VGG, Neural Style Transfer, Tensorflow",
  tools: "Google colabs",
  content: "Studied, analyzed and reduced loss of neural style transfer using VGG network introduced by Gatys et. al.",
  links: [{
    display_text: "SOURCE CODE",
    url: "https://github.com/krit95/neural_style_transfer"
  }]
}, {
  id: "1",
  img_src: [
    "res/images/rge_1.webp",
    "res/images/rge_2.webp",
    "res/images/pp_1.webp",
    "res/images/sltfr_1.webp"
  ],
  period: "Apr - July 2018",
  title: "Inventory showcase/management Android app",
  keywords: "Android, Firebase authentication, node js, express js, mongoDB",
  tools: "Android Studio, Firebase console, Mongo Compass",
  content: "Built android apps for SMEs to showcase and manage inventory. Used Firebase for user sign in and authentication, stored data in MongoDB Atlas with the REST APIs being served by a node JS server",
  links: [{
    display_text: "R.G. Enterprises",
    url: "https://play.google.com/store/apps/details?id=com.tiklyo.bpih.rge"
  }, {
    display_text: "Phoenix Pharmaceuticals",
    url: "https://play.google.com/store/apps/details?id=com.tiklyo.bpih.pp"
  }, {
    display_text: "Salutifer",
    url: "https://play.google.com/store/apps/details?id=com.tiklyo.bpih.sltfr"
  }]
}, ]

export default ProjectsDetails;
