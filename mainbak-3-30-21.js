//import homestead from "deeds.js"; //with path

const imagesSourcePath =
  "https://citadelofthewind.com/wp-content/mirandusdeeds/images/";

const openseaRef = "?ref=0x4605ed5eb12cd5d08d24d6ab0ea6c30acf9f2020";

//const imagesSourcePath = "./images/";

function initialize() {
  generateDeedListBS();
  var coll = document.getElementsByClassName("collapsible"); //collapsible
  var i;

  // for (i = 0; i < coll.length; i++) {
  //   coll[i].addEventListener("click", function () {
  //     this.classList.toggle("active");
  //     var content = this.nextElementSibling;
  //     if (content.style.display === "block") {
  //       content.style.display = "none";
  //     } else {
  //       content.style.display = "block";
  //       //resizeIframe(document.getElementById("frame"));
  //     }
  //   });
  // }
}

function pop(source) {
  $("#imagepreview").attr("src", source.firstElementChild.src); // here asign the image to the modal when the user click the enlarge link
  $("#imagemodal").modal("show");
}

function generateDeedList() {
  var deedHTML = "";
  deeds.forEach((deed) => {
    deedHTML += `<div class="collapsible">
      <div><img class="deedimage" src="${imagesSourcePath}${
      deed.deedimage
    }"/><img class="img-fluid" src="${imagesSourcePath}${deed.isoimage}"/></div>
      <div class="collapsibletitle">${deed.name}</div>
      <div class="collapsibledescription">${deed.description}</div>
    </div>
    <div class="content">
    <a href="#" id="pop" onclick="pop(this)">
      <img id="imageresource" src="${imagesSourcePath}${
      deed.layoutimage
    } style="width: 400px; height: 264px;">
      Click to Enlarge
    </a>
        <div class="plotlist">${getPlotsHTML(deed)}</div>
    </div>`;
  });

  $(".container").html(deedHTML);
}

function generateDeedListBS() {
  var deedHTML = "";
  deeds.forEach((deed) => {
    var deedId = deed.name.toString().toLowerCase().replaceAll(" ", "");
    deedHTML += `<div class="row collapsible" data-bs-toggle="collapse" href="#content${deedId}" role="button" aria-expanded="false" aria-controls="content${deedId}">
        <div class="col-xs-12 col-lg-4"><img class="img-fluid" src="${imagesSourcePath}${
      deed.isoimage
    }?2"/><br><span class="imageattribution">Image courtesy of <a href="https://twitter.com/TheInkKnight">@TheInkKnight</a>&nbsp;<a href="https://www.youtube.com/c/InkKnight">YouTube</a></span></div>

        <div class="col-xs-12 col-lg-6"><span class="collapsibletitle">${
          deed.name
        }</span><br>${deed.description}</div>
      </div>
      <div class="row content collapse" id="content${deedId}">
          <div class="col-xs-12 col-lg-4"><a href="#" onclick="pop(this)"><img class="img-fluid" src="${imagesSourcePath}${
      deed.layoutimage
    }?2"/></a></div>
          <div class="col-xs-12 col-lg-6 plotlist">${getPlotsHTMLBSOS(
            deed
          )}</div>
      </div>`;
    // </div>`;
  });

  $("#deedAccordion").html(deedHTML);
}

function generateDeedListAcc() {
  var deedHTML = "";
  deeds.forEach((deed) => {
    var deedId = deed.name.toString().toLowerCase().replaceAll(" ", "");
    deedHTML += `
    <div class="accordion-item row">
  <h2 class="accordion-header" id="heading${deedId}">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${deedId}" aria-expanded="false" aria-controls="collapse${deedId}">
    <div class="col-sm-2"><img class="img-fluid" src="${imagesSourcePath}${
      deed.deedimage
    }"/><img class="img-fluid" src="${imagesSourcePath}${deed.isoimage}"/></div>
            <div class="col-sm-4 collapsibletitle">${deed.name}</div>
            <div class="col-sm-6">${deed.description}</div>
    </button>
  </h2>
  <div id="collapse${deedId}" class="accordion-collapse collapse" aria-labelledby="heading${deedId}" data-bs-parent="#deedAccordion">
    <div class="accordion-body row">
      <div class="col-3"><img class="img-fluid" src="${imagesSourcePath}${
      deed.layoutimage
    }"/></div>
      <div class="col-9">${getPlotsHTMLBS(deed)}</div>  
    </div>
  </div>
</div>`;
  });

  $(".accordion").html(deedHTML);
}

function getPlotsHTMLBS(deed) {
  var plotHTML = "";
  deed.plots.forEach((plot) => {
    plotHTML += `<div class="plotListHeader">${plot.type}: ${plot.amount}</div>`;
    plotHTML += `<div>${shops
      .filter((shop) => shop.Size == plot.type)
      .map((shp) => shp.Structure)
      .join(", ")}</div>`;
  });
  return plotHTML;
}

function getPlotsHTMLBSOS(deed) {
  var plotHTML = "";
  deed.plots.forEach((plot) => {
    plotHTML += `<div class="plotListHeader">${plot.type}: ${plot.amount}</div>`;
    plotHTML += `<div>${openseaAssets
      .filter((shop) => isDimensionTypeMatch(plot.type, shop.description))
      .map(
        (shp) =>
          `<a target="_blank" href="${shp.permalink}${openseaRef}">${shp.name}</a>`
      )
      .join(", ")}</div>`;
  });
  return plotHTML;
}

function isDimensionTypeMatch(type, desc) {
  var dimensions = desc.substr(1, desc.indexOf(")") - 1);
  switch (type) {
    case "Small":
      return dimensions == "5x5";
    case "Medium":
      return dimensions == "10x10";
    case "Large":
      return dimensions == "10x20";
    case "Grand":
      return dimensions == "20x20";
  }
  return false;
}

function getPlotsHTML(deed) {
  var plotHTML = "";
  deed.plots.forEach((plot) => {
    plotHTML += `<div>${plot.type}: ${plot.amount}</div>`;
    plotHTML += `<div class="shoplist">${shops
      .filter((shop) => shop.Size == plot.type)
      .map((shp) => shp.Structure)
      .join(", ")}</div>`;
  });
  return plotHTML;
}
