import nncolorizer from "../../assets/images/nn-colorizer.png"; // with import
import goodnews from "../../assets/images/goodnews.png"; // with import
import pher from "../../assets/images/pher.png"; // with import
import focusbyteavatar from "../../assets/images/focusbyteavatar.png"; // with import
import pathfinderreact from "../../assets/images/pathfinderreact.png"; // with import
import robinhoodtrader from "../../assets/images/robinhoodtrader.png"; // with import
import popsan from "../../assets/images/popsan.png"; // with import
import robothead from "../../assets/images/robothead.png"; // with import
import snneeg from "../../assets/images/snn-eeg.png"; // with import

const bigProjects = {
  title: "Some Projects I've Worked On",
  subtitle: "Constantly being updated as I work on more things 😊",
  projects: [
    {
      image: nncolorizer,
      projectName: "Neural Network Colorizer",
      projectDesc:
        "This was the final project for my graduate artificial intelligence course where I created both a 2 layer neural network and a basic K-Means classification agent to recolor the second half of a gray scale image based on the colored first half of it. Both K-Means clustering and the neural network were coded from scratch in order to understand both techniques better as a supplement to the course material.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/connorray/NNColorizer",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: goodnews,
      projectName: "GoodNews",
      projectDesc:
        "This was a project for HackDSC in 2020 when the quarantine just started. My friend and I made an iOS app that uses a sentimenet analysis model to filter the good news from the bad news and only show the good news on a feed.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/connorray/GoodNews",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: pher,
      projectName:
        "Prioritized Hindsight Experience Replay (PHER) DQN for Difficult Atari Game",
      projectDesc:
        "This was my final project for my graduate machine learning class in Spring 2021. I was able to conduct a small scale original research project inpsired by the work on HER and Prioritized experience replay in order to convert the Atari game Motezum'as Revenge into a goal based environment for goal based learning for the solution of the sparse reward problem in DRL. This model was able to achieve better rewards than the baseline DQN as was hypothesized and is a good stepping stone for future work.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/connorray/PHER",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: focusbyteavatar,
      projectName: "Focusbyte Avatar Feature",
      projectDesc:
        "Helped my friend on a pomodoro timer app using React Native. I coded the avatar feature which allows users to customize their in app avatar.",
      footerLink: [
        {
          name: "Website",
          url: "https://focusbyte.io/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: pathfinderreact,
      projectName: "Path Finder Visualizer React",
      projectDesc:
        "A path finding visualizer for Djikstra's, A*, BFS, and DFS made when I was first learning React.",
      footerLink: [
        {
          name: "Demo URL",
          url: "https://optimistic-torvalds-3a6284.netlify.app/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: robinhoodtrader,
      projectName: "Robinhood Algorithmic Trading Bot",
      projectDesc:
        "An algorithmic trading bot which employs the golden cross strategy.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/conorray/RHTrader",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: popsan,
      projectName:
        "CoRL20: Deep Reinforcement Learning with Population-Coded Spiking Neural Network for Continuous Control",
      projectDesc:
        "Accepted publication to CoRL20 about DRL for contiuous control using a spiking actor network in some standard actor-critic DRL methods, such as DDPG, TD3, PPO, and SAC. This project showed that the use of spiking neural networks in DRL can allow for better energy efficiency (important for mobile robotics) while not compromising performance.",
      footerLink: [
        {
          name: "Read the Publication Here",
          url: "https://arxiv.org/abs/2010.09635",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: snneeg,
      projectName:
        "TMLR22: Deep Reinforcement Learning with Population-Coded Spiking Neural Network for Continuous Control",
      projectDesc:
        "Accepted publication to TMLR22 about decoding EEG using spiking neural networks (SNNs) on neuromorphic hardware. I mostly trained existing sota DNN methods for decoding EEG data as baselines to compare our SNN method with. Implemented and trained the following models: 3D-CNN, 2D-CNN, CNN-TC, and CNN-LSTM.",
      footerLink: [
        {
          name: "Read the Publication Here",
          url: "https://openreview.net/pdf?id=ZPBJPGX3Bz",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: robothead,
      projectName:
        "Interface for A Neuro-inspired Oculomotor Controller for a Robotic Head Prototype",
      projectDesc:
        "Coded an interface using Python for a masters student's thesis on a robotic head using spiking neural networks for tracking laser points on a wall.",
      footerLink: [
        {
          name: "Read the Publication Here",
          url: "https://rucore.libraries.rutgers.edu/rutgers-lib/53082/",
        },
        //  you can add extra buttons here.
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

export { bigProjects };
