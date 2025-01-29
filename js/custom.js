/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/
 
$(function () {
    "use strict";
 
    /* Preloader */
    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);
 
    /* JQuery Menu */
    $(document).ready(function () {
        $('header nav').meanmenu();
    });
 
    /* Tooltip */
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
 
    /* Sticky */
    $(document).ready(function () {
        $(".sticky-wrapper-header").sticky({ topSpacing: 0 });
    });
 
    /* Mouseover */
    $(document).ready(function () {
        $(".main-menu ul li.megamenu").mouseover(function () {
            if (!$(this).parent().hasClass("#wrapper")) {
                $("#wrapper").addClass('overlay');
            }
        });
        $(".main-menu ul li.megamenu").mouseleave(function () {
            $("#wrapper").removeClass('overlay');
        });
    });
 
    /* NiceScroll */
    $(".brand-box").niceScroll({
        cursorcolor: "#9b9b9c",
    });
 
    /* NiceSelect */
    $(document).ready(function () {
        $('select').niceSelect();
    });
 
    /* Scroll to Top */
    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#back-to-top").addClass('b-show_scrollBut');
        } else {
            $("#back-to-top").removeClass('b-show_scrollBut');
        }
    });
    $("#back-to-top").on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
 
    /* Contact-form */
    if (document.querySelector("#showMap")) {
        document.querySelector("#showMap").addEventListener("click", function (e) {
            e.preventDefault();
            $(".map_form_container").addClass("map_show");
            document.querySelector(".contact_heading").innerText = "Location";
        });
    }
    if (document.querySelector("#showForm")) {
        document.querySelector("#showForm").addEventListener("click", function (e) {
            e.preventDefault();
            $(".map_form_container").removeClass("map_show");
            document.querySelector(".contact_heading").innerText = "Request A Call Back";
        });
    }
 
    /* Form Validation */
    $.validator.setDefaults({
        submitHandler: function () {
            alert("Formulário enviado com sucesso!");
        }
    });
 
    $(document).ready(function () {
        $("#contact-form").validate({
            rules: {
                firstname: "required",
                email: {
                    required: true,
                    email: true
                },
                lastname: "required",
                message: "required",
                agree: "required"
            },
            messages: {
                firstname: "Por favor, insira seu nome",
                email: "Por favor, insira um endereço de e-mail válido",
                lastname: "Por favor, insira seu sobrenome",
                message: "Por favor, insira sua mensagem",
                agree: "Por favor, aceite nossa política"
            },
            errorElement: "div",
            errorPlacement: function (error, element) {
                error.addClass("help-block");
 
                if (element.prop("type") === "checkbox") {
                    error.insertAfter(element.parent("input"));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function (element) {
                $(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
            },
            unhighlight: function (element) {
                $(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
            }
        });
    });
 
    /* Modal Handling */
    const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
 
    if (openModalBtn) {
        openModalBtn.onclick = function (event) {
            event.preventDefault();
            modal.style.display = "block";
        };
    }
 
    if (closeModalBtn) {
        closeModalBtn.onclick = function () {
            modal.style.display = "none";
        };
    }
 
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
 
    /* WhatsApp Form Submission */
   // Função chamada quando o formulário é enviado
function formWhats(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();  
 
    var form = document.getElementById('formContato');
    var nome = '*Nome: *' + document.getElementById('name').value;
    var email = '*Email: *' + document.getElementById('email').value;
    var tel = document.getElementById('phone').value;
    var mens = '*Mensagem: *' + document.getElementById('message').value;
   
    var assunto = 'Mensagem do site!';
    var numFone = '5511996383812';  // Número do WhatsApp
    var quebraDeLinha = '%0A';  // Codificação de quebra de linha
 
    
    if (tel === '') {
        alert("O campo do celular é obrigatório");
        return;
    } else {
        tel = '*Fone: *' + tel;
    }
 
    
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + numFone +
        '&text=' + assunto + ' - ' + quebraDeLinha + quebraDeLinha +
        nome + quebraDeLinha + email + quebraDeLinha + tel + quebraDeLinha + mens;
 
    
    console.log(whatsappUrl);
 
    
    window.open(whatsappUrl, '_blank');
    
    
    form.reset();
}
 
 
if (document.getElementById('formContato')) {
    document.getElementById('formContato').addEventListener('submit', formWhats);
}


// Obtém os elementos do DOM
// Função para abrir o modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'block';
}

// Função para fechar o modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// IDs dos botões e modais
const modalConfig = [
    { openBtn: 'openModalBtn1', modal: 'cartModal1', closeBtn: 'closeModal1' },
    { openBtn: 'openModalBtn2', modal: 'cartModal2', closeBtn: 'closeModal2' },
    { openBtn: 'openModalBtn3', modal: 'cartModal3', closeBtn: 'closeModal3' },
    { openBtn: 'openModalBtn4', modal: 'cartModal4', closeBtn: 'closeModal4' },
    { openBtn: 'openModalBtn5', modal: 'cartModal5', closeBtn: 'closeModal5' },
    { openBtn: 'openModalBtn6', modal: 'cartModal6', closeBtn: 'closeModal6' },
];

// Adiciona os eventos de clique
modalConfig.forEach(({ openBtn, modal, closeBtn }) => {
    // Evento para abrir o modal
    document.getElementById(openBtn).addEventListener('click', function (event) {
        event.preventDefault();
        openModal(modal);
    });

    // Evento para fechar o modal
    document.getElementById(closeBtn).addEventListener('click', function () {
        closeModal(modal);
    });

    // Fecha o modal ao clicar fora do conteúdo
    window.addEventListener('click', function (event) {
        const modalElement = document.getElementById(modal);
        if (event.target === modalElement) closeModal(modal);
    });
});


// Seleciona o link
document.querySelector('.nav-link[href="#aboutSection"]').addEventListener('click', function (event) {
    event.preventDefault(); // Evita o comportamento padrão de pular diretamente

    // Rolagem suave até a seção
    document.getElementById('aboutSection').scrollIntoView({
        behavior: 'smooth'
    });
});



 
});
 