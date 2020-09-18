import React from "react"

const Article = ({
    content: {
        title,

        
        text: {
            content: [
              {
                content: [
                  {
                    value
                  }
                ]
              }
            ]
          },










    banner: {
      file: {
        url
      }
    },
    publishedAt
  }
}) => (
  <div>
    <h2>{title}</h2>
    <img src={url} alt={title}/>
    <p>
      {value}
    </p>
    <h5>{publishedAt}</h5>
  </div>
)

export default Article