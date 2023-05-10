<script>
    import '../global.css';
  </script>
  <nav>
    <a href="/">Home</a>
    <a href="/posts">About</a>
    <a href="/favs">Favs</a>
  </nav>
  <slot />
  <footer>
   <a href="/">&copy;2023 Hannah Wilson </a>
  </footer>
  <style>
    nav, footer {
      display: flex;
      justify-content: space-evenly;
      padding: .5em;
      background-color:rgb(69, 117, 206);
      color: rgb(114, 135, 255);
    
    }
    footer {
    grid-row: 3;
    position: sticky;
    bottom: 0;
  }
  </style>