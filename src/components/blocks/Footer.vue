<template>
  <footer class=" footer">
    <div class="section-inverse-theme pb-5 mt-2">
      <div class="footer__content container">
        <div class="flex" data-column>
          <h2>Let's make something you'll love!</h2>
          <AttachedButtons :link="{ url: 'mailto:youremail@example.com' }" :rotate="true" size="md"
            >Get in touch</AttachedButtons
          >
        </div>
      </div>
    </div>
    <div class="footer__bottom p-1" >
      <p>© 2025 - All rights reserved</p>
    </div>
  </footer>
</template>
