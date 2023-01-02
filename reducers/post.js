export const initialState = {
    mainPosts:[{
        id:1,
        User:{
            id:1,
            nickname:'river'
        },
        content:'첫 번째 게시글 #해시태그 #익스프레스',
        Images:[
            {
            src:'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/09/18/1e586277-48ba-4e8a-9b98-d8cdbe075d86.jpg',
             },
             {
             src:'https://cdn-std-web-155-55-godomall.spdycdn.net/gtogcokr_godomall_com/data/editor/board/press/d862b5ea082afcd276c713ef90b95488_222320.jpg'
            },
            {
                src:"https://mimg.segye.com/content/image/2022/12/07/20221207506071.jpg"
            }
        ],
        Comments:[{
                User:{
                    nickname:'swimming',
                },
                content:"no.1",
            },{
                User:{
                    nickname:'kang',
                },
                content:'22', 
            }
        ]
    }],
    imagePaths:[], //이미지 업로드 경로
    addPostLoading:false, //게시 완료시 true
    addPostDone:false,
    addPostError:null,
    addCommentLoading:false, //게시 완료시 true
    addCommentDone:false,
    addCommentError:null,
};

export const ADD_POST_REQUEST='ADD_POST_REQUEST';
export const ADD_POST_SUCCESS='ADD_POST_SUCCESS';
export const ADD_POST_FAILURE='ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST='ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS='ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE='ADD_COMMENT_FAILURE';

export const addPost=(data)=>({
    type:ADD_POST_REQUEST,
    data,
});

export const addComment=(data)=>({
    type:ADD_COMMENT_REQUEST,
    data,
});

const dummyPost={
    id:2,
    content:'dummy data',
    User:{
        id:1,
        nickname:'river',
    },
    Images:[],
    Commemnts:[],
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case ADD_POST_REQUEST:
            return{
                ...state,
                addPostLoading:true,
                addPostDone:false,
                addPostError:null,
            }
        case ADD_POST_SUCCESS:
            return{
                ...state,
                mainPosts:[dummyPost,...state.mainPosts],
                addPostLoading:false,
                addPostDone:true,
            };
        case ADD_POST_FAILURE:
            return{
                ...state,
                addPostLoading:false,
                addPostError:action.error,
            };
            case ADD_COMMENT_REQUEST:
                return{
                    ...state,
                    addCommentLoading:true,
                    addCommentDone:false,
                    addCommentError:null,
                }
            case ADD_COMMENT_SUCCESS:
                return{
                    ...state,
                    mainomments:[dummyPost,...state.mainPosts],
                    addommentLoading:false,
                    addommentDone:true,
                };
            case ADD_COMMENT_FAILURE:
                return{
                    ...state,
                    addCommentLoading:false,
                    addCommentError:action.error,
                }
        default:
            return state;
    }
}
export default reducer;