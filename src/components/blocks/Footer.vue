<template>
  <footer class="">
    <div class="section-inverse-theme footer">
      <div class="footer__content container">
        <div class="flex" data-column>
          <h2>Let's make something you'll love!</h2>
          <AttachedButtons
            :link="{ url: 'mailto:youremail@example.com' }"
            :rotate="true"
            size="md"
            >Get in touch</AttachedButtons
          >
        </div>
      </div>
      <div class="footer__bottom container">
        <p>© 2023 - All rights reserved</p>
      </div>
    </div>
  </footer>
</template>
