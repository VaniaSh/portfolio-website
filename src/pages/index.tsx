import styles from '@/styles/Home.module.scss'
import Image from "next/image";
import avatar from '../../public/avatar.png'
import {Button} from "@/components/Button";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter()
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroImageContainer}>
                <Image className={styles.img} src={avatar} alt={'avatar'}/>
            </div>
            <div className={styles.heroContainerGreeting}>
                <div className={styles.greeting__text}>
                    <h1>Vania Shepetko</h1>
                    <p>A web developer who specializes in the development of applications and websites.</p>
                </div>
                <div className={styles.greeting__button}>
                    <Button onClick={() => router.push('/about')}>More</Button>
                </div>
            </div>
        </div>
    )
}
