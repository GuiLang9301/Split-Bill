import { useState } from "react";
import FriendItem from "./FriendItem";
import SplitForm from "./SplitForm";
import "./App.css";

export default function App() {
  const Oldfriends = [
    {
      name: "Clark",
      id: crypto.randomUUID(),
      url: "https://i.pravatar.cc/54",
      oweMe: -7,
    },
    {
      name: "Sarah",
      id: crypto.randomUUID(),
      url: "https://i.pravatar.cc/45",
      oweMe: 20,
    },
    {
      name: "Anthony",
      id: crypto.randomUUID(),
      url: "https://i.pravatar.cc/46",
      oweMe: 0,
    },
  ];
  let oweMe;

  const [friends, setFriends] = useState(Oldfriends);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState();
  const [name, setName] = useState("");
  const [selectedfriend, setSelectedfriend] = useState();
  const [splitForm, setSplitform] = useState({
    billValue: "",
    yourExpense: "",
    whoPaid: "you",
  });

  function handleForm(e) {
    const { value, name } = e.target;
    setSplitform((prev) => ({ ...prev, [name]: value }));
    console.log(splitForm);
  }

  function splitBill(id) {
    if (splitForm.whoPaid === "you") {
      oweMe = parseInt(splitForm.billValue) - parseInt(splitForm.yourExpense);
    } else {
      oweMe = parseInt(splitForm.yourExpense) - parseInt(splitForm.billValue);
    }
    console.log(oweMe);

    setFriends((prev) =>
      prev.map((friend) =>
        friend.id === id ? { ...friend, oweMe: friend.oweMe + oweMe } : friend
      )
    );

    setSplitform({ billValue: "", yourExpense: "", whoPaid: "you" });
  }

  function addFriend() {
    const randomNumber = Math.floor(Math.random() * 1000) + 500;
    setFriends((prev) => [
      ...prev,
      {
        name: name,
        id: crypto.randomUUID(),
        url: `https://i.pravatar.cc/${randomNumber}`,
        oweMe: 0,
      },
    ]);
  }

  function handleSelect(id) {
    //do not use filter method because it will return an array
    setSelectedfriend(friends.find((friend) => friend.id === id));
    setSelected(!selected);
  }

  function handleChange(e) {
    const { value } = e.target;
    setName(value);
  }

  const friendsElements = friends.map((friend) => (
    <FriendItem
      name={friend.name}
      key={friend.id}
      oweMe={friend.oweMe}
      id={friend.id}
      url={friend.url}
      handleSelect={() => handleSelect(friend.id)}
    />
  ));

  return (
    <>
      <div className='row '>
        <div className=' col custom-width-container'>
          <div className='d-flex flex-column gap-3'>{friendsElements}</div>
          <div className='m-3 d-flex justify-content-end'>
            <button
              className='btn btn-success '
              onClick={() => setToggle(!toggle)}
            >
              Add Friend{" "}
            </button>
          </div>
          <div>
            {toggle ? (
              <div className='border d-flex gap-1 p-3 align-items-center rounded-3 '>
                <div className='d-flex gap-2 align-items-center'>
                  <label className='fw-bold'>Friend name</label>
                  <input
                    onChange={handleChange}
                    className='form-control custom-width-input'
                    type='text'
                  ></input>
                </div>
                <div>
                  <button
                    onClick={addFriend}
                    className='btn btn-warning fw-bold'
                  >
                    Add
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className='col custom-width-container'>
          {selected && (
            <SplitForm
              selectedfriend={selectedfriend}
              handleForm={handleForm}
              splitForm={splitForm}
              splitBill={splitBill}
              key={selectedfriend.id}
            />
          )}
        </div>
      </div>
    </>
  );
}
