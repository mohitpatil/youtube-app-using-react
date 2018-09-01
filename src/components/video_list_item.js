import React from 'react';

const VideoListItem = (props) => {

    const video = props.video;

    const imgUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    console.log(video);
    return (
        <li className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;