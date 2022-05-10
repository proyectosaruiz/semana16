import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const post = () => <Gallery photos={photos} />;
render(<BasicRows />, document.getElementById("app"));
