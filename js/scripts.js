
 const links = [
  {
    label: "Week01 Notes",
    url: "week01/index.html"
}, {
    label: "Week02 Notes",
    url: "week02/index.html"
}, {
  label: "Week03 Notes",
  url: "week03/index.html"
}, {
  label: "Week04 Notes",
  url: "week04/index.html"
}
  ];
  
  function createLinks() {
    links.forEach(link => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${link.url}">${link.label}</a>`;
        document.getElementById("links").appendChild(listItem);
    });
}; 


