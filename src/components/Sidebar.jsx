import { PencilLine } from '@phosphor-icons/react';

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
              className={styles.cover}
              src="https://static.vecteezy.com/ti/vetor-gratis/t2/4447761-abstrato-vermelho-fluido-onda-fundo-gratis-vetor.jpg" 
            />

            <div className={styles.profile}>
                <Avatar src="https://cdn-icons-png.freepik.com/512/168/168724.png" />

                <strong>Isaac Mateus</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}