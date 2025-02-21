import React from "react";
import styles from "./resources.module.css";
// import "@/styles/globals.css";

function Resources() {
  const resourcesData = [
    {
      number: 1,
      title: "Portable Equipment",
      description:
        "We need a customized trailerfor for all of the equipment and items that the services will need, as well as roll-out storage ",
      imageUrl: "/images/resources1.png", // Example image URL
    },
    {
      number: 2,
      title: "Social Media Presence",
      description:
        "We need strong strategic social media presence that reaches people who are far from God and/or new to the area.",
      imageUrl: "/images/resources2.png", // Example image URL
    },
    {
      number: 3,
      title: "Awesome Landlords",
      description:
        "We need people who would be blessed by our presence and willing to do things out of the ordinary. Please pray for this specifically.",
      imageUrl: "/images/resources3.png", // Example image URL
    },
  ];

  return (
    <div className="centerContainer">
      <div className="background">
        {/* Header */}
        <h1 className="title">
          <i className="fa-solid fa-oil-well" aria-hidden="true"></i> Resources
        </h1>
        <h3>To carry out this project, we need the following resources:</h3>

        
        {/* Resources List */}
        {resourcesData.map((resource, index) => (
          <div key={index} className={styles.contentRow}>
            {/* Image on the Left */}
            <div className={styles.imageContainer}>
              <img
                src={resource.imageUrl}
                alt={resource.title}
                className={styles.resourceImage}
              />
            </div>

            {/* Text on the Right */}
            <div className={styles.textContainerRight}>
              <h2>{resource.title}</h2>
              <p className={styles.description}>{resource.description}</p>
            </div>
          </div>
        ))}

        {/* Additional Sections */}
        <h1 className="title" style={{ marginTop: "100px" }}>
          <i className="fa-solid fa-people-roof" aria-hidden="true"></i> We Need You
        </h1>
        <p className="description">
          We aim to launch with 30-40 adults from Heights Baptist Church,
          providing a solid base of committed members to support and grow Living
          Oaks Church. <br />
          <br />
          LOC is developing a Core Team, believers who feel the call to join
          the Perrins in this church for the foreseeable future. This team will
          help in specific areas of ministry and volunteerism that are needed
          regularly, like children's programming, teen mentoring, and leading in
          worship. <br />
          <br />
          LOC also needs a Launch Team, believers who want to help the church
          get off to a great start for the first year. This team helps as a
          welcoming face to visitors and fills in when extra hands are needed,
          but only for a temporary time.
        </p>

        <h1 className="title" style={{ marginTop: "100px" }}>
          <i className="fa-solid fa-church" aria-hidden="true"></i> We Need Funding
        </h1>
        <p className={styles.description}>
          We are blessed to have financial support from our sending church,
          Heights Baptist Church, the North American Mission Board (NAMB), The
          Southern Baptists of Texas Convention (SBTC), the Gulf Coast Baptists
          of Texas Association (GCBA), and additional partners. Our financial
          goal is to raise $300,000 over three years, with the following annual
          budgets:
        </p>
        {/* Budget Details */}
        <ul class="no-bullets">
          <li>
          <div className={styles.iconAndText}>
           
          <h2 style={{ margin: "20px", display: "flex", alignItems: "center", gap: "20px" }}> <i class="fa-solid fa-seedling fa-sm" aria-hidden="true"></i> Year 1 budget: $100,000</h2>
            </div>
            <ul class="no-bullets">
            <li style={{ marginLeft: "50px" }}>
              75% from partners / 25% from congregants
              </li>
            </ul>
          </li>
        </ul>

        <br />

        <ul class="no-bullets">
          <li>
            <div className={styles.iconAndText}>
             
            <h2 style={{ margin: "20px", display: "flex", alignItems: "center", gap: "20px" }}>
  <i className="fa-solid fa-seedling fa-lg" aria-hidden="true"></i>
  Year 2 budget: $100,000
</h2>
            </div>
            <ul class="no-bullets">
            <li style={{ marginLeft: "50px" }}>
                50% from partners / 50% from congregants
              </li>
            </ul>
          </li>
        </ul>

        <br />

        <ul class="no-bullets">
          <li>
            <div className={styles.iconAndText}>
              
            <h2 style={{ margin: "20px", display: "flex", alignItems: "center", gap: "20px" }}><i class="fa-solid fa-tree fa-xl" aria-hidden="true"></i>Year 3 budget: $100,000</h2>
            </div>
            <ul class="no-bullets">
            <li style={{ marginLeft: "50px" }}>
              25% from partners / 75% from congregants
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resources;
