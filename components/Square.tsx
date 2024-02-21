import styles from "./Square.module.css";

export default function Square(props: any){
    return (
        <div
            style={{
                backgroundColor: (props.black) ? "#000" : "#FFF"
            }}
            className={styles.square}>
        </div>
    );
}