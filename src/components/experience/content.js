const experiencesList = {
  title: "Some things I've done professionally",
  experiences: [
    {
      experienceName: "Amazon Software Engineer II (current)",
      experienceDesc:
        "I am now a SDE 2 in the Measurement, Analytics, and Data Science team still within Amazon Advertising. The team requires a chameleon that can debug big data pipelines running spark on EMR one day and create nice looking UIs for internal account managers another day. For this reason, and yes I know it's a running joke in the industry now but, I am a fullstack developer working with a wide range of tech from ReactJs, Java + Spring, big data pipelines mostly running spark SQL on EMR with an internal orchestration service, and a bunch of AWS services like Sagemaker, Spark, EMR, Lambda, Athena, Redshift, DynamoDB, API Gateway, and whatever else the team needs. So far I helped the Twitch ADSP team deliver on a senior VP goal by inventing a simple solution for injecting microfrontends (MFEs) using react-helmet and using custom event listeners to pass data. This was crucial in helping dependent teams deliver for the goal tied to deprecating certain twitch widgets running in managed service advertising consoles in Amazon. I also work on productionizing machine learning recommendation system ETLs, building infrastructure using a bunch of the AWS tech I mentioned earlier. The industry calls this ML Ops I guess.",
    },
    {
      experienceName: "Amazon Software Engineer I (March 2022-Dec 2023)",
      experienceDesc:
        "Started March 2022. Fullstack developer working with ReactJs for UI and Java server side helping account managers within Amazon streamline their campaign creations for big advertisers. Worked on a big project tied to a senior VP goal within the org for delivering a ML service that serves budget recommendations for products running ads within managed service campaigns in Amazon advertising.",
    },
    {
      experienceName: "Amazon Software Engineer Intern (July 2021-Sep 2021)",
      experienceDesc:
        "Amazon NYC summer 2021. Advertisting team. Fullstack work using Java for server side and React for frontend. Built a trailing quarters feature in an internal tool used by account managers to help them create audience plans for their advertiser clients. Also worked on big data jobs using Scala, AWS Redshift, ECS, S3, etc. in order to support new data from the UI.",
    },

    {
      experienceName: "Research Assistant at Rutgers Computational Brain Lab",
      experienceDesc:
        "Helped 2 PhD students with their research and was able to conduct original research with them for an accepted publication to CoRL 20. I developed several state of the art DRL algorithms with spiking actor networks using PyTorch. I also wrote baselines for measuring the performance of the neuromorphic versions of DRL algorithms.",
    },

    {
      experienceName: "AI/Web Intern at Adventure Corporation",
      experienceDesc:
        "Was able to do research how to use AI for music through signal processing as well as how to convert such data into spikes in order to use spiking neural networks. Near the end of the internship I was able to help out on an emoji and music web based game with fellow interns using React.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

export { experiencesList };
