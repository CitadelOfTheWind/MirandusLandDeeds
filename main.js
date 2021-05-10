//import homestead from "deeds.js"; //with path

const imagesSourcePath =
  "https://citadelofthewind.com/wp-content/mirandusdeeds/images/";

const openseaRef = "?ref=0x4605ed5eb12cd5d08d24d6ab0ea6c30acf9f2020";

//const imagesSourcePath = "./images/";

function initialize() {
  generateDeedList();
}

function pop(source) {
  $("#imagepreview").attr("src", source.firstElementChild.src); // here asign the image to the modal when the user click the enlarge link
  $("#imagemodal").modal("show");
}

function generateDeedList() {
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
          <div class="col-xs-12 col-lg-6 plotlist">${getPlotsHTML(deed)}</div>
      </div>`;
    // </div>`;
  });

  $("#deedAccordion").html(deedHTML);
}

function getPlotsHTML(deed) {
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
