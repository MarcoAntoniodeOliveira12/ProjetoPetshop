import styles from './Dono.module.css';
function Atendimento(){
    return(
        <div className={styles.Vet}>
            
            <form className={styles.vete}>
                <fieldset className={styles.vetFieldset}>
                    <h1 className={styles.vetH1}>Dono</h1>

                        <label for="nome" className={styles.vetlabel}>Dono:</label>
                        <input type="nome" id="fone"  placeholder="Ricardo Herinque Viegas" className={styles.vetinput} /><br></br>

                        <label for="fone" className={styles.vetlabel}>Telefone:</label>
                        <input type="tel" id="fone"  placeholder="(19) 98964-7890" className={styles.vetinput} /><br></br>
                        
                        <label for="email" className={styles.vetlabel}>Email:</label>
                        <input type="email" id="email"  placeholder="ricardohviegas@gmail.com" className={styles.vetinput} /><br></br>

                    <img className={styles.vetImg} src="https://th.bing.com/th/id/OIG.3V6xsBiZC0Rg7M5Wi0NZ?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"></img>
                </fieldset>
            </form>
        </div>
    );
}
export default Atendimento;