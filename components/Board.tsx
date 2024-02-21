import Row from "./Row";

export default function Board(props: any){
    return (
        <>
        <div>
        {drawColumns()}
        </div>
        </>
    );
}


function drawColumns()
{
    let colums = [];
    for (let i = 1; i < 9; i++) {
        const inverted = (i % 2 == 0) ? false : true;
        colums.push(
            <Row inverted={inverted}/>
        );
    }
    return colums;
}