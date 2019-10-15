'use strict'
$(document).ready(function(){
    onCreatePortfolioCards();
})
function onCreatePortfolioCards(){
    var projects = getProjects();
    var strHTML = '<div class="row">';
    projects.map(function(project, idx){
        return strHTML+= ` 
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" onClick="renderModal(this);" data-id="${idx}" href="#portfolioModal${idx+1}">
             <div class="portfolio-hover">
                 <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
            </a>
            <div class="portfolio-caption">
                <h4>${project.title}</h4>
                <p class="text-muted">${project.desc}</p>
            </div>
        </div>`
    })
    strHTML+= '</div>';
    $(strHTML).appendTo('#portfolio');

}

function renderModal(elCard){
    var elIdx = elCard.getAttribute('data-id')
    console.log(elIdx);
    var projects = getProjects();
    var project = projects.find(function(project, idx){
        return +elIdx === idx

    })
    var elModal = `<div class="portfolio-modal modal fade" id="portfolioModal${+elIdx+1}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${project.title}</h2>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.png" alt="">
                <p>${project.desc}</p>
                <ul class="list-inline">
                  <a class="m-5 btn btn-lg btn-outline-dark" target="_blank" href="https://grape24.github.io/${project.id}/">CHECK IT OUT!</a>
                  <li>Published repository at: ${new Date(project.publishedAt)}</li>
                  <li>Category: 
                    <span class="badge badge-dark">${project.labels[0]}</span>
                    <span class="badge badge-dark">${project.labels[1]}</span>
                    <span class="badge badge-dark">${project.labels[2]}</span>
                    <span class="badge badge-dark">${project.labels[3]}</span>
                  </li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
    return $(elModal).appendTo('body');

}



