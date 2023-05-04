import { Box, Avatar, Typography } from "@mui/material";
export default function AboutPage() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        {" "}
        <Typography variant="h1">About</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar src="/me.jpeg" sx={{ width: 300, height: 300, mr: 5, mb: 5 }} />
        <Typography component="container">
          <Typography variant="h2">Tommy Lin</Typography>
          <Typography
            paragraph
            style={{
              color: "#adb7bd",
              "font-size": "20px",
              "line-height": "26px",
              "text-indent": "30px",
              margin: 0,
            }}
          >
            I am driven by a passion for integrating diverse fields of knowledge
            to create value. My enthusiasm for this approach was sparked during
            my studies in chemistry, when I worked collaboratively with other
            groups to synthesize a chemical substrate that powered a
            programmable energy-harvesting device. This experience motivated me
            to pursue a degree in Information Technology, which would allow me
            to continue to combine different areas of expertise.
            <br /> After graduation, I joined a battery company as a data
            scientist, where I applied my knowledge of chemistry and information
            technology to develop new batteries and solve complex manufacturing
            challenges. This role reinforced my belief in the power of
            interdisciplinary approaches.
            <br /> Currently, I am focused on developing my skills in software
            development with the goal of becoming a solution architect. My AWS
            cloud practitioner certification and experience with CICD tools such
            as Infra-as-code, Jenkins, Ansible, and Docker demonstrate my
            commitment to staying current with emerging technologies. I am also
            expanding my knowledge of web development with state-of-the-art
            tools such as React, JS, and Django, with the aim of providing
            innovative solutions that create value for people outside the IT
            industry.
          </Typography>
        </Typography>
        {/* <Image alt="" src="/me.jpeg"/> */}
      </Box>
    </>
  );
}
