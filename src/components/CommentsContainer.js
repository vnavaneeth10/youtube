

const commentsData = [
    {
      name: "Navaneeth",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Iron Man",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Luttapi",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Mayavi",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Kuttusan",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Tony Stark",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Captain America",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Hulk",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];

const Comment = ({data}) => {
    const {name, text, replies} = data;
    return (
    <div className="flex p-2 mx-1 my-2 shadow-sm bg-gray-200 rounded-lg">
        <img 
        className="w-11 h-11 rounded-full  border border-black border-solid"
        alt="subscriber-icon" src="https://avatars.githubusercontent.com/u/41069175?s=400&u=ba647545b4027ed8e95e1c9ee03ac6f4001a9456&v=4" />
    <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
    </div>
    </div>
   ); 
} ;

const CommentsList = ({comments}) => {

    return (
        
        comments.map((comment, index) => (
            <div key={index}>     
             <Comment data={comment}/>
             <div className="pl-5 border border-l-black ml-5">
                {/* recursion of components */}
                <CommentsList comments={comment.replies}/>
            </div>
            </div>
            ))
        )
    
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">

        <h1 className="text-2xl font-bold">
            Comments:
        </h1>

        <CommentsList comments={commentsData}/>

    </div>
  )
}

export default CommentsContainer