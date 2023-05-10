<script>
  export let data;
  const {villager} = data;
  console.log(data);
</script>

<!-- <p>Name:</p> -->
<p>Personalilty: {villager.personality}</p>
<p>Birthday: {villager.birthday}</p>
<img src="https://acnhapi.com/v1/images/villagers/60" alt="">
<p>Species: {villager.species}</p>
<p>Hobby: {villager.hobby}</p>
<p>Saying: {villager.saying}</p>


  <!-- <article>
    {#each artworks as { title, artist_title, image_url, date_display, medium_display }}
    <figure>
      <img src="https://www.artic.edu/iiif/2/{image_url}/full/843,/0/default.jpg" alt="">
      <figcaption><strong>{title}</strong> by {artist_title}<br>{date_display} | {medium_display}</figcaption>
    </figure>
    {/each}
  </article> -->