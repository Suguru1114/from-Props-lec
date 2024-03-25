import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
  <Card 
    name={contact.name} 
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}

  />
  );

}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
        img="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg"
      />
      {contacts.map(createCard)}
      {/* <Card 
        name = {contacts[0].name}
        img = {contacts[0].imgURL}
        tell = {contacts[0].phone}
        email = {contacts[0].email}

      />

      <Card 
        name = {contacts[1].name}
        img = {contacts[1].imgURL}
        tell = {contacts[1].phone}
        email = {contacts[1].email}

      />

      <Card 
        name = {contacts[2].name}
        img = {contacts[2].imgURL}
        tell = {contacts[2].phone}
        email = {contacts[2].email}

      /> */}
    </div>
  );
}

export default App;
