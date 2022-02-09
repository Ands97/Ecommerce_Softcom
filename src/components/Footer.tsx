import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


const Footer: NextPage = () => {
    return (
        
        <footer className={styles.footer}>
                <img src={'http://localhost:3000/images/logomarcaSoftcom.svg'}/>
                <Link href={'#'}>Políticas de Privacidade</Link>
                <Link href={'#'}>Termos de Uso</Link>
                <div className={styles.socials}>
                    <span>Nossas redes sociais</span>
                    <div>
                        <img src={'http://localhost:3000/images/socialsFacebook.svg'}/>
                        <img src={'http://localhost:3000/images/socialsInstagram.svg'}/>
                        <img src={'http://localhost:3000/images/socialsTweet.svg'}/>
                        <img src={'http://localhost:3000/images/socialsYt.svg'}/>
                    </div>
                    
                </div>
        </footer>
    )
}

export default Footer;
