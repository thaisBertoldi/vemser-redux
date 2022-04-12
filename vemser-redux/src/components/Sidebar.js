import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as VideosActions from "../store/actions/video";

function Sidebar({ modules, handleVideo }) {
  return (
    <aside>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.videos.map((video) => (
              <li key={video.id}>
                <h1>{video.title}</h1>
                <button onClick={() => handleVideo(module, video)}>
                  Selecionar Video
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

const mapStateToProps = (state) => ({
  modules: state.videoReducer.modules,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(VideosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
