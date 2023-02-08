import Space from "./space";

const Board = (props) => {
    const { bingo } = props;
    console.log(bingo);
    return (
        <div>
            <div className='d-flex flex-wrap'>
                <h2>bingo</h2>
            </div>
            <div className='d-flex flex-wrap'
                style={{
                    height: "80vh",
                    width: "80vh"
                }}>
                {bingo.map((space, i) => {
                    const _free = i === 12 ? true : false;
                    return (
                        <Space key={i} space={space} free={_free}></Space>
                    )
                })}
            </div>
        </div>
    )
}

export default Board;