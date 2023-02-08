import { all } from "axios";
import { useEffect, useState } from "react";

const Sidebar = (props) => {
    const { data, handleCreateNewBingoCard } = props;

    //upon change of table, populate dropdown
    // test/dummy data
    const [allSpaces, setAllSpaces] = useState([]);
    const [id, setId] = useState(0);
    const [allItems, setAllItems] = useState([]);
    const [newSpace, setNewSpace] = useState("");

    const handleChangeTitle = (e) => {
        e.preventDefault();
        console.log("changed title");
        console.log(e.target.value);

        console.log(data);
        console.log(data[e.target.value])

        setId(data[e.target.value]._id);
        setAllSpaces(data[e.target.value].spaces);
    }

    const handleOnChange = (e, i) => {
        let updatedCards = allSpaces;
        console.log(e.target.value);
        console.log("i = " + i);

        if (!e.target.value) {
            console.log("removing");
            console.log(updatedCards.length);
            updatedCards.splice(i - 1, 1);
        }

        updatedCards[i] = e.target.value;
        setAllSpaces([...updatedCards]);
        console.log(allSpaces);
    }

    const handleOnChangeNewSpace = (e) => {
        console.log(e.target.value);
        setNewSpace(e.target.value);
    }


    return (
        <div>
            <div>
                <h1>my table title here</h1>
                <form>
                    <select
                        onChange={(e) => { handleChangeTitle(e) }}
                        className='form-select'
                    >
                        {data.map((_drop, i) => {
                            return (
                                <option value={i}>{_drop.title}</option>
                            )
                        })}
                        {/* <option value={"custom1"}>Custom1</option>
                        <option value={"custom2"}>Custom2</option> */}
                    </select>
                </form>
            </div>

            <form
                style={{ backgroundColor: "lightgrey", height: "80vh" }}
                onSubmit={(e) => { handleCreateNewBingoCard(e, allSpaces, id, newSpace) }}
            >
                <h3>Card stats</h3>
                <ul>
                    <li>{allSpaces.length} spaces</li>
                </ul>
                <div className='overflow-auto h-50'>
                    {/* loop through totals array checking if each element is in bingo array */}
                    {/* if element exists in bingo array, checked: true */}
                    {
                        allSpaces.map((space, i) => {
                            return (
                                <div>
                                    <input
                                        type="text"
                                        key={i}
                                        onChange={(e) => { handleOnChange(e, i) }}
                                        value={space}
                                        className="form-control"
                                        placeholder={`space ${i + 1}`}
                                    />
                                </div>
                            )
                        })
                    }
                    <div>
                        <input
                            type="text"
                            onChange={(e) => { handleOnChangeNewSpace(e) }}
                            value={newSpace}
                            className="form-control"
                        />
                    </div>
                </div>
                <button type="submit">Generate New Bingo Card</button>
            </form>
            <button>Export cards as JSON</button>
        </div>
    )
}

export default Sidebar;