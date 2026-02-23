import { createSlice } from '@reduxjs/toolkit';

interface Skill {
  name: string;
  category: string;
}

interface ProfileState {
  name: string;
  tagline: string;
  about: string;
  skills: Skill[];
  activeSection: string;
  showEmail: boolean;
}

const initialState: ProfileState = {
  name: "Yasmine Jaoua",
  tagline: "Telecommunications Student | Aspiring Penetration Tester | Problem Solver",
  about: "I'm Yasmine, a Telecommunications student with a passion for cybersecurity and ethical hacking. I focus on penetration testing, network security, and exploring vulnerabilities in digital and communication systems. I enjoy tackling complex challenges and strengthening defenses across networks and applications.",
  skills: [
    { name: "JavaScript", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "C / C++", category: "Programming" },
    { name: "React.js", category: "Frontend Development" },
    { name: "Redux.js", category: "State Management" },
    { name: "HTML5 & CSS3", category: "Web Development" },
    { name: "Machine Learning", category: "Artificial Intelligence" },
    { name: "Prompt Engineering", category: "Artificial Intelligence" },
    { name: "Git & GitHub", category: "Version Control" },
    { name: "SQL (Oracle, SQLite)", category: "Databases" },
    { name: "Linux (Ubuntu)", category: "Operating Systems" },
    { name: "Cloud Computing", category: "Cloud" },
    { name: "Smart Contracts & DApps", category: "Blockchain" },
    { name: "Cybersecurity Fundamentals", category: "Cybersecurity" }
  ],
  activeSection: 'hero',
  showEmail: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    toggleEmail: (state) => {
      state.showEmail = !state.showEmail;
    },
  },
});

export const { setActiveSection, toggleEmail } = profileSlice.actions;
export default profileSlice.reducer;
