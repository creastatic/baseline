<script type="text/javascript" charset="utf-8">
  import LinkRecurrence from '../recurrences/LinkRecurrence.svelte'
  import InfoRecurrence from '../recurrences/InfoRecurrence.svelte'
  import SuccessRecurrence from '../recurrences/SuccessRecurrence.svelte'
  import WarnRecurrence from '../recurrences/WarnRecurrence.svelte'
  import { CheckSquareIcon, ChevronsUpIcon} from 'svelte-feather-icons'
</script>

<main>
  <section class="flex flex-col justify-start items-center m-tbp2 mb-ls ">
    <div
      class="text-center bg-fixed bg-gradient-to-b from-medium mb-tbp2 via-maximal to-maximal from-20% via-25% to-60% p-tbp2 rounded-b-xl animate-pulse animate-once animate-duration-10000 animate-delay-1000 animate-ease-in-out">
      <h1 class="font-bold  font-header text-3xl">Com a <span class="font-highlight font-light">CREASTATIC</span> você
        poderá alcançar resuldados <span class="font-highlight font-light">SURPREENDENTES</span> em seus <span
          class="font-highlight font-light">WEBSITES ESTÁTICOS</span></h1>
      <p class="pt-tbp1 text-1xl ">Não é porquê um website é estático que ele não precisa ser profissional não é mesmo.
        É aí que surge a creastatic para criar websites de ultima linha com uma equipe capacitada para isso. </p>
    </div>
    <div class="mb-tbp2 mb-ls">
      <ul class="flex flex-col items-start gap-5">
        <li class="flex text-sv items-center justify-center gap-5">
          <CheckSquareIcon class="" size="40" /> <span>Pague até 30x menos do que o casual, e obtenha um site bem melhor
            do que os tradicionais</span>
        </li>
        <li class="flex text-sv items-center justify-center gap-5">
          <CheckSquareIcon class="" size="40" /> <span>Adquira serviços gratuitos a partir da etapa de negociação,
            compre + por um valor menor </span>
        </li>
        <li class="flex text-sv items-center justify-center gap-5">
          <CheckSquareIcon class="" size="40" /> <span> Pague parcelado para manutensão, não é necessário cartão de
            crédito.</span> <a href="inline">
            <LinkRecurrence><span>saiba mais</span></LinkRecurrence>
          </a>
        </li>
        <li class="flex text-sv items-center justify-center gap-5">
          <CheckSquareIcon class="" size="40" /> <span>Programamos com ferramentas modernas e dinâmicas, velocidade na
            renderização é tudo. </span>
        </li>
        <li class="flex text-sv items-center justify-center gap-5">
          <CheckSquareIcon class="" size="40" /> <span>Criamos diversos tipos de websites, adaptamos sua
            necessidade.</span> <a href="inline">
            <LinkRecurrence><span>catálogo</span></LinkRecurrence>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <section class="mt-ls p-ls mt-tbp2">
    <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
      
      <iframe src="https://ytlink" frameborder="0" allowfullscreen
        class="absolute rounded-b-xl top-0 left-0 w-full h-full"></iframe>
    </div>
    <ChevronsUpIcon class="text-center mx-auto mt-5" size="40" />
    <h2 class="text-center text-3xl py-tbp1">NADA MELHOR DO QUE UMA INTRODUÇÃO A NOSSOS SERVIÇOS</h2>
  </section>
  <section class="accordion-group bw">
    <div class="accordion" tabindex="0">
      <label class="title">SERVIÇOS E FUNÇÕES</label>
      <div class="content">
        <div class="min-h-0">
          <div>NÃO SOMOS UMA EMPRESA COMUM, somos uma equipe de freelancers que pratica algo similar ao e-business. Nós
            trabalhamos em um único princípio (websites) e utilizamos nossas habilidades inteletuais para isso. De
            acordo com o <em>"Art. 966. do Código Civil:
              Parágrafo único. Não se considera empresário quem exerce profissão intelectual, de natureza científica,
              literária ou artística, ainda com o concurso de auxiliares ou colaboradores, salvo se o exercício da
              profissão constituir elemento de empresa."</em> Por via disto dendemos a tratar-nos não como um negócio em
            si mas sim como profissionais frellancers, termo em inglês utilizado para abordar sobre profissionais
            autônomos com serviços providos das naturezas citadas acima. Por esse motivo, vocẽ poderá nos encontrar
            trabalhado individualmente em plataformas similares ao <LinkRecurrence><a class="inline"
                href="https://upwork.com" target="_blank">upWork</a></LinkRecurrence>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion" tabindex="0">
      <label class="title">COMO COMPRAR</label>
      <div class="content">
        <div class="min-h-0">
          <p>
            VEJA NOSSO CATÁLOGO DISPONÍVEL NO MENU DO TOPO DESTE WEBSITE, escolha um ou mais produtos e então entre em
            contato conosco pelo discord ou outro meio de comunicação existente para negociar. Não vendemos para pessoas
            jurídicas ou profissionais de natureza científica. Coprando por alguma platafoma de freelancers você terá
            mais chances de obter benefícios. Estamos sempre prontos para tirar suas dúvidas lá no discord. Dê uma
            olhada no rodapé deste website para acessar nosso discord ou conhecer nossos termos. Fidelidade na compra é
            equivalente a um produto bacana, não se esqueça 🌟
          </p>
        </div>
      </div>
    </div>
  </section>
</main>
<footer class="px-5 flex justify-center items-center bg-medium mt-ls mt-20 rounded-b-xl">
  <div class="popover bg-minimal my-20">
		<label class="trigger rounded-b-xl btn" tabindex="0">
			<p class="text-onminimal m-tbp1">Contate-nos</p>
		</label>
		<div class="content top-center mb-10" tabindex="0">
			<div class="arrow" />
			<div class="p-4 text-sm bg-medium rounded-t-xl text-center">
			  <ul class="text-center">
			    <li class="text-center w-full flex items-center justify-center">
			      <LinkRecurrence>
			        <a target="_blank" class="" href="#">links não disponíveis. Aguarde uns dias...</a>
			      </LinkRecurrence>
			    </li>
			  </ul>
			</div>
		</div>
	</div>
</footer>