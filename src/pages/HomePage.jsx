import React from 'react'
import Coheed from '../Images/Coheed.jpg'
import RDGLDGRN from '../Images/rdgldgrn.jpg'
import Billie from '../Images/Billie.jpg'

const HomePage = () => {
  return (
    <>
      <h1>My Favorite Bands</h1>

      <section className="bandCard">
        <img className="bandPic" src={Coheed}></img>
        <section className="briefDescription">
          <h1>Coheed and Cambria</h1>
          <p>
            Coheed is an American progressive rock band from Nyack, New York,
            formed in 1995. Most of Coheed and Cambria's albums are concept
            albums based on a science fiction storyline called The Amory Wars, a
            series written by Claudio Sanchez, which has been transcribed into a
            series of comic books as well as a full-length novel. The band has
            released nine studio albums, three live albums, and several
            special-edition releases.
          </p>
        </section>
      </section>
      <section className="bandCard">
        <img className="bandPic rdgldgrn" src={RDGLDGRN}></img>
        <section className="briefDescription">
          <h1>RDGLDGRN</h1>
          <p>
            RDGLDGRN (pronounced Red Gold Green) is an American band based out
            of Reston, Virginia, a suburb of Washington, D.C.. Formed in 2011,
            the band recorded their debut album at Sound City Studios in 2012
            with producer Kevin Augunas and engineer Clif Norrell. They have
            worked with a wide range of notable musicians, including Dave Grohl
            and Pharrell Williams.
          </p>
        </section>
      </section>
      <section className="bandCard">
        <img className="bandPic billie" src={Billie}></img>
        <section className="briefDescription">
          <h1>Billie Eilish</h1>
          <p>
            Coheed is an American progressive rock band from Nyack, New York,
            formed in 1995. Most of Coheed and Cambria's albums are concept
            albums based on a science fiction storyline called The Amory Wars, a
            series written by Claudio Sanchez, which has been transcribed into a
            series of comic books as well as a full-length novel. The band has
            released nine studio albums, three live albums, and several
            special-edition releases.
          </p>
        </section>
      </section>
    </>
  )
}

export default HomePage
