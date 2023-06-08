import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // name: string = 'Leanne Graham';
  // email: string = "Sincere@april.biz";
  // phone: number = 1-770-736-8031-56442;
  // name2: string = 'Ervin Howell';
  // img="https://www.pngmart.com/files/22/User-Avatar-Profile-Background-Isolated-PNG.png";
  // users: string [] = ['Bret', 'Antonette', 'Samantha', 'Karianne', 'Kamren', 'Leopoldo_Corkery', 'Kurtis Weissnat',
  // 'Maxime_Nienow', 'Delphine', 'Moriah.Stanton']


  users: any =[
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      gander: "male",
      phone: "1-770-736-8031 x56442",
      img: "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png",
    },
    {
      id: 2,
      name: "Ervin Howell",
      gander: "male",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      img: "https://www.pngmart.com/files/22/User-Avatar-Profile-Background-Isolated-PNG.png",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      gander: "female",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      img: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    },
    {
      id: 4,
      name:"Patricia Lebsack",
      gander: "female",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      gander: "male",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      img:"https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      gander: "male",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      gander: "male",
      email:  "Telly.Hoeger@billy.biz",
      phone: "210.067.6132",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      gander: "male",
      email: "Sherwood@rosamond.me",
      phone: "586.493.6943 x140",
      img: "https://png.pngtree.com/png-clipart/20230102/original/pngtree-fashion-boy-avatar-png-image_8855187.png",
    },

  ]

  // seaechArray() {
  //   const searchResults = this.users.filter(
  //     (user) =>
  //     user.username.toLowerCase().includes(this.nameValue) &&
  //     user.email.toLowerCase().includes(this.emailValue)
  //   );
  //   return searchResults
  // }

}
