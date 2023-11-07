import Image from "next/image";
import shaftstick from "../../images/shaftstick.jpg";
import shaft from "../../images/shaft.jpg";
import shaftWhole from "../../images/shaft-whole.jpg";
import threadDetail from "../../images/thread-detail.jpg";
import clubWhole from "../../images/club-whole.jpg";
import pointDetail from "../../images/point-detail.jpg";
export default function ShaftStick() {
  return (
    <div className="prose">
      <h2>1000 Series Shaft Stick</h2>

      <div>
        <div>
          <Image src={shaftstick} width={207} height={200} alt="shaft stick" />
        </div>
        <h3>MODEL 8004 SHAFT STICK for VIBRATION METERS</h3>
        <ul>
          <li>SOLID GRADE &#x201C;A&#x201D; CLEAR HARD ROCK MAPLE</li>
          <li>
            LIGNE VITAE INSERTS IN CONTACT END ARE HIGH TEMP EPOXY AND PINNED
            FOR SAFETY AND LONG LIFE
          </li>
          <li>METAL CAP for MAGNETIC or THREADED PROBE ATTACHMENT</li>
          <li>ROUND HANDLE FOR SURE CONTROL</li>
          <li>EXCELLENT FREQUENCY RESPONSE AND EASE OF USE</li>
        </ul>
      </div>

      <div>
        <div>
          <Image
            src={shaft}
            width={198}
            height={200}
            alt="shaft stick in use"
          />
        </div>
        <h3>MODEL 8004 SHAFT STICK ON PUMP SHAFT</h3>
        <p>
          DataMite Technologies has created and manufactured a custom shaft
          stick for use with vibration meters and data collectors. Taking
          vibration data from vertical and canned pumps has always been a
          problem. With the shaft stick important shaft vibration can be
          obtained in the field without any other equipment accessory. Simply
          attach your probe onto the metal cap of the shaft stick magnetically
          or using a 1/4-28 threaded probe. Apply carefully to a smooth
          uninterrupted shaft and record the vibration data.
        </p>
      </div>

      <div>
        <p></p>
        <div>
          <Image src={shaftWhole} width={200} height={200} alt="" />
          <p className="caption">Model 8004 Shaft Stick</p>
        </div>
        <div>
          <Image src={threadDetail} width={200} height={200} alt="" />
          <p className="caption">Shaft Stick Detail</p>
        </div>
      </div>

      <div>
        <div>
          <Image src={clubWhole} width={200} height={200} alt="" />
          <p className="caption">Model 8004-B 10&quot; Extension</p>
        </div>
        <div>
          <Image src={pointDetail} width={200} height={200} alt="" />
          <p className="caption">
            Model 8004-C an Exciter/Generator Carbon Brush Probe.
          </p>
        </div>
      </div>

      <div>
        <h3>MODEL 8004 SHAFT STICK DIMENSIONS</h3>
        <p>
          Model 8004 is using the finest materials and with the user in mind.
          Attention is paid to the control, by design, and safety of the shaft
          stick by necessity. Using clear Hard Rock Maple as a base and Ligne
          Vitae (very hard oily wood used in pump bearings) as inserts yield a
          very versatile and rugged shaft stick. However, the shaft stick cannot
          survive shaft keys, setscrews or other protrusions on a shaft. Careful
          attention must be paid to the condition of the measured shaft and
          placement of the shaft stick. Place against the shaft to be measured
          the tip end of an ice cream stick or thin plastic and any interruption
          can be noted. This method is best for testing the shaft surface for
          protrusions. Accessories include 8004-B a 10” extension and 8004-C an
          exciter or generator carbon brush probe.
        </p>
      </div>
    </div>
  );
}
