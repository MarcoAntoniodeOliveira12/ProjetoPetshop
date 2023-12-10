import styles from './Menu.module.css';
function Menu(){
    return(
        <div className={styles.div}>
        <fieldset className={styles.vetFieldset}>
            <nav className={styles.nav}>
            <a className={styles.navA} href='#'>Pets</a>

            <span className={styles.navSeparator}>|</span>
            <a className={styles.navA} href='#'>Veterinario</a>

            <span className={styles.navSeparator}>|</span>
            <a className={styles.navA} href='#'>Atendimento</a>

            <span className={styles.navSeparator}>|</span>
            <a className={styles.navA} href='#'>Dono</a>
            
            </nav>
        </fieldset>
        </div>
    );
}
export default Menu;