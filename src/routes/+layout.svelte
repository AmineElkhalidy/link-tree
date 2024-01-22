<script>
  import "../app.css";
  import { user, userData } from "$lib/firebase";

  // Subscribe to the stores
  $user;
  $userData;
</script>

<div class="min-h-screen flex flex-col">
  <slot />
</div>
