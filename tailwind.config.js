/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html","./dest/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// ul {
//   li {
//     .dropdown {
//       width: 100%;
//       position: absolute;
//       z-index: 999;
//       display: none;
//       li {
//         display: block;
//       }
//     }
//   }
// }
// ul {
//   li:hover {
//     .dropdown {
//       display: block;

//       a {
//         color: black;
//         background-color: #fff;
//         box-shadow: 3px 3px 3px rgb(236, 235, 235);
//         &:hover {
//           background-color: rgb(236, 233, 233);
//         }
//       }
//     }

//   }
// }