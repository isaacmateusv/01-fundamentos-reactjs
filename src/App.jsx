import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,  
    author: {
      avatarUrl: "https://cdn-icons-png.freepik.com/512/168/168734.png",
      name: "Julia Silva",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal tudo bom" },
      {
        type: "paragraph",
        content:
          "Acabei de terminar o curso sobre JS agora estou aprendendo sobre REACT.JS",
      },
      { type: "link", content: "Jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-02-27 16:39:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://cdn-icons-png.flaticon.com/512/168/168727.png",
      name: "Cassia Almeida",
      role: "Designer",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal tudo bom" },
      {
        type: "paragraph",
        content:
          "Acabei de terminar o curso sobre JS agora estou aprendendo sobre REACT.JS",
      },
      { type: "link", content: "Jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-03-01 20:45:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
