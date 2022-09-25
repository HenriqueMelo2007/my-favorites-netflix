const body = document.querySelector('body')
let bodySize = body.clientWidth

const wrapperOne = document.querySelector('#wrapper-one')
const wrapperTwo = document.querySelector('#wrapper-two')

function breakpoint() {
  if (bodySize < 591) {
    wrapperOne.innerHTML = `
    <div class="swiper-slide">
      <a target="_blank" href="https://www.netflix.com/watch/70301854?trackId=14170056">
      <img class="netflix-serie" src="https://occ-0-4044-3852.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfxoYWx7fYIkCJ1OxubGuyvXhZgUJjR6qoOdziz3tpFDNMMIu2_hg0p0SZhKJPuTTnZ-O2W42NzXAEmVXIvuo8FtjmMcb6dvNrE.jpg?r=422" alt="Imagem da série Vikings">
      </a>
    </div>

    <div class="swiper-slide">
      <a target="_blank" href="https://www.netflix.com/watch/80205342?trackId=14170068&tctx=8%2C34%2Cbe46e51b-6038-4102-993a-470c03ec9113-20170651%2CGPS_73F037C0F4ED8B72626302F2F08931-DFB92FDCDC7CAB-BC633F6CE4_p_1663356040869%2CGPS_73F037C0F4ED8B72626302F2F08931_p_1663356040869%2C%2C%2C%2C80192098">
      <img class="netflix-serie" src="https://occ-0-2524-3852.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTpOVo1Tmat4WcERV802tF-_XhpyJ8DyQNQvJ-nZOWqiW3c8bZgv7-cuVBeozS8cB2P9EBaMwnI1Kj0l4V0ocFnaoDw7pdqr7354sl53-Qiaj_AMvOsuw1i7u_CPWyTudfoa.jpg?r=131" alt="Imagem da série La Casa de Papel">
      </a>
    </div>

    <div class="swiper-slide">
      <a href="https://www.netflix.com/watch/80117471?trackId=255824129">
      <img class="netflix-serie" src="https://occ-0-2524-3852.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd47AvCftl-PldlajE_WJGmv09yed3ovyWE0XD2pMj_OD9dS4Xt86TehnPzmpzitEqrBx8ApdpBuoWfH1GkTtUsocWBbFjMl781lLvzcPCIVw74QvD--_VipJcTr52GKw-Ta.jpg?r=753" alt="Imagem da série Thirteen Reasons Why">
      </a>
    </div>

    <div class="swiper-slide">
      <a href="https://www.netflix.com/watch/81091395?trackId=14170068&tctx=8%2C5%2Cbe46e51b-6038-4102-993a-470c03ec9113-20170651%2CGPS_73F037C0F4ED8B72626302F2F08931-DFB92FDCDC7CAB-BC633F6CE4_p_1663356040869%2CGPS_73F037C0F4ED8B72626302F2F08931_p_1663356040869%2C%2C%2C%2C81091393">
      <img class="netflix-serie" src="https://occ-0-4044-3852.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbWdQZCoWeZQdNQMgenTHme30v3IzWvCta3YIca_3z5K5zYFHTwla4Y7j7n-TIjHh6UabB7TJ0HSrNfdxE3-MlwEHEFF65Uhmj4.jpg?r=720" alt="Imagem do anime Demon Slayer">
      </a>
  </div>`

  wrapperTwo.innerHTML = `
  <div class="swiper-slide">
                  <a target="_blank" href="https://www.netflix.com/watch/81140931?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7C45edb506-b71e-4f5e-aec6-0e3e75675b12-107428402_titles%2F1%2F%2F1917%2F0%2F0%2CNAPA%40%40%7C45edb506-b71e-4f5e-aec6-0e3e75675b12-107428402_titles%2F1%2F%2F1917%2F0%2F0%2Cunknown%2C%2C45edb506-b71e-4f5e-aec6-0e3e75675b12-107428402%7C1%2C%2C">
                    <img class="netflix-movie" src="https://occ-0-1133-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfOVQhSYosCNqegqi2mozdRWvprxac8IrrJX98niy0xe4ly0EJsTzLFqMtUXsRT4o7NdHyHukE6J-vukd1dDC0HxAryz0V-VSKw.jpg?r=5b0" alt="Imagem do filme 1917">
                  </a>
                </div>

                <div class="swiper-slide">
                  <a target="_blank" href="https://www.netflix.com/watch/81128579?trackId=14170056&tctx=3%2C37%2C048ba296-c6b7-4229-84d8-a5b9c31ff574-23131518%2CGPS_73F037C0F4ED8B72626302F2F08931-7CA8935FD1B351-4D889E183B_p_1663530059886%2CGPS_73F037C0F4ED8B72626302F2F08931_p_1663530059886%2C%2C%2C%2C">
                    <img class="netflix-movie" src="https://occ-0-1133-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfvNuTigaBMH_soVnsX_o77HAg5NynzLZrHzL8T8swE1Ac6VJ-bZ23mI9iqkra8vgfCXLZRiFRIAzCaMD_IfmoXA8FpYBn18u7jYNUXiu2HhJxAOksC3wY4NpoN4GX4ttYo_.jpg?r=81f" alt="Imagem do filme O Poço">
                  </a>
                </div>

                <div class="swiper-slide">
                  <a target="_blank" href="https://www.netflix.com/watch/81173970?trackId=14170056&tctx=3%2C38%2C048ba296-c6b7-4229-84d8-a5b9c31ff574-23131518%2CGPS_73F037C0F4ED8B72626302F2F08931-7CA8935FD1B351-4D889E183B_p_1663530059886%2CGPS_73F037C0F4ED8B72626302F2F08931_p_1663530059886%2C%2C%2C%2C">
                    <img class="netflix-movie" src="https://occ-0-1133-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb9_KZdBV0vk7m_SascYa6Q3NXp6dnBv4FdUt1WweaDOcD6-cBjiSJCA7s9JHnXjmuJ_sL2KIuMRet3DjOIJ1QynoRFoB9_vIODKmNMDHyP_nCzvi4XAtPyKVcnCjqycRxZs.jpg?r=f21" alt="Imagem do filme Sete Prisioneiros">
                  </a>
                </div>

                <div class="swiper-slide">
                  <a target="_blank" href="https://www.netflix.com/watch/70267241?trackId=14170056&tctx=3%2C10%2C048ba296-c6b7-4229-84d8-a5b9c31ff574-23131518%2CGPS_73F037C0F4ED8B72626302F2F08931-7CA8935FD1B351-4D889E183B_p_1663530059886%2CGPS_73F037C0F4ED8B72626302F2F08931_p_166353">
                    <img class="netflix-movie" src="https://occ-0-1133-1380.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVU40OBrNrMx7UE3V0wE4i0DIFkzaZlXpuL2xZg611XRW1A93zOQ7V2dn6z2aLW1T-qiES9aqYbf_CuPpZjmtKl2qkg-s9FikdM.jpg?r=252" alt="Imagem do filme Circulo de Fogo">
                  </a>
                </div>`
  }
}

breakpoint()