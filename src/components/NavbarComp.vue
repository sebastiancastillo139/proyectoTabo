<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"
        ><img src="@/assets/img/cropped-El-Tabo.png" alt="" width="300"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item dropdown nav-link badge border border-white border-3 fs-2 text-white text-wrap mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Municipalidad
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><router-link class="dropdown-item nav-link badge border border-white border-3 fs-4 text-black text-wrap" to="/municipalidad/autoridades">Autoridades 2021-2024</router-link ></li>
              <li><router-link  class="dropdown-item nav-link badge border border-white border-3 fs-4 text-black text-wrap" to="/municipalidad/direcciones">Contacto Direcciones</router-link ></li>
              <li><router-link  class="dropdown-item nav-link badge border border-white border-3 fs-4 text-black text-wrap" to="/municipalidad/oficinadepartes">Oficina de Partes</router-link ></li>
              <li><router-link  class="dropdown-item nav-link badge border border-white border-3 fs-4 text-black text-wrap" to="/municipalidad/docs">Documentos de Interés</router-link ></li>
            </ul>
          </li>
          <li class="nav-item nav-link badge border border-white border-3 fs-2 text-white text-wrap mx-1">
            <router-link
              class="nav-link"
              aria-current="page"
              to="/newsletter"
              >Noticias</router-link
            >
          </li>
          <li class="nav-item nav-link badge border border-white border-3 fs-2 text-white text-wrap mx-1">
            <router-link
              class="nav-link"
              aria-current="page"
              to="/ordenanzas"
              >Ordenanzas</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style scoped>
.navbar {
  background-color: #f29819;
}
</style>

<style lang="scss" scoped>
@mixin testing {
  @include nav-link;
  @include badge;
}
</style>
