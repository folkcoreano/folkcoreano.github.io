import projects from "./projects.js";
import { a, div, img, span } from "./elements.js";

const block = document.querySelector(".block");

const create_elements = (project) => {
  const imagekit = "https://ik.imagekit.io/yonas/";

  const project_tags = () => {
    const tags = [];
    for (const tag of project.tags.sort()) {
      tags.push(div(tag, "project-tag"));
    }
    return div("", "project-tags", tags);
  };

  return div(
    "",
    ["project", "project-animate"],
    [
      div("", "project-head", [
        a("", project.url, "_blank", "project-title", [
          span(
            "",
            "",
            img(
              `${imagekit}/site/projects/${project.icon}`,
              project.title,
              "project-icon"
            )
          ),
          span(project.title),
        ]),
        div(project.year, "year"),
      ]),
      a(
        "",
        project.url,
        "_blank",
        "project-title",
        img(
          `${imagekit}/portfolio/${project.id}.png?tr=f-webp`,
          project.title,
          "project-image",
          project.position
        )
      ),
      div(project.description, "project-description"),
      a(project.url, project.url, "_blank", "project-link"),
      project_tags(),
    ]
  );
};

const project_array = [];

for (const project of projects) {
  project_array.push(create_elements(project));
}

block.appendChild(div("", "projects", project_array));

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const project = entry.target.classList;
    entry.isIntersecting
      ? project.add("project-animate")
      : project.remove("project-animate");
  }
});

for (const project of project_array) {
  observer.observe(project);

  const project_image = project.querySelector(".project-image").classList;
  project.onmouseenter = () => project_image.add("image-hover");
  project.onmouseleave = () => project_image.remove("image-hover");
}
