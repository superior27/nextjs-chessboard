import Square from "./Square";
import styles from "./Row.module.css";

export default function Row(props: any){
    return (
        <>
            <div className={styles.row}>
                {drawRow(8, props.inverted)}
            </div>
        </>
    );
}

function drawRow(quantRow: number, inverted: boolean = false)
{
    quantRow = (quantRow < 1) ? 1 : quantRow;
    let rows = [];

    for (let i = 1; i < quantRow+1; i++) {
        rows.push(
            (!inverted) ?
            <div>
                <Square black={(i % 2 == 0) ? true : false}/>
            </div>
            :
            <div>
                <Square black={(i % 2 == 0) ? false : true}/>
            </div>
        );
    }
    return rows;

}

function drawColumns()
{
    let colums = [];
    for (let i = 1; i < 9; i++) {
        const inverted = (i % 2 == 0) ? false : true;
        colums.push(
            <div className={styles.row}>
                {drawRow(8, inverted)}
            </div>
        );
    }
    return colums;
}