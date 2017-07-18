import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import marked from 'marked';

import * as actions from '../actions';

class App extends Component {
  render() {
    const {
      textCurrent,
      isShowingHelp,
      enterText,
      showHelp,
    } = this.props;
    const parsedText = marked(textCurrent, { sanitize: true});
    const processedText = { __html: parsedText };

    return (
      <div>

        {/* <textarea
          value={textCurrent}
          onChange={(event) => enterText(event.target.value)} />
        <span dangerouslySetInnerHTML={processedText}></span>
        <button onClick={showHelp}>Press me</button> */}
        {/* <div className={`animated ${isShowingHelp && 'show'}`}></div> */}

        <div className="main-content">

          <header>
            <h1 className="app-title">Markdown Previewer</h1>
            <div className="help-button">
              <i className="fa fa-question" aria-hidden="true"></i>
            </div>
          </header>

          <div className="text-panels">
            <textarea className="text-panel-left"></textarea>
            <div className="text-panel-right">
              Parturient morbi dolor id a leo habitant suspendisse euismod facilisi ullamcorper vestibulum felis suspendisse dictumst. A in quam congue id orci vel commodo convallis feugiat scelerisque ut a maecenas tincidunt varius malesuada conubia aptent parturient accumsan ullamcorper lacinia. Primis vestibulum consequat justo quis aenean phasellus per dolor taciti cursus pulvinar vestibulum mollis orci ipsum mattis vulputate.

Venenatis aenean accumsan vivamus sed etiam habitasse parturient a morbi fames cum cras viverra nam ullamcorper scelerisque nisl vel eu penatibus enim sed suscipit morbi nisi neque quis. Magna viverra ipsum sit adipiscing a condimentum dapibus duis vitae consequat ultricies phasellus ante egestas a semper cubilia a condimentum consectetur in sed condimentum interdum parturient eu ullamcorper. Pretium quam habitasse nec consectetur a dapibus tristique purus adipiscing lacinia id nascetur viverra blandit porta sem condimentum venenatis. Faucibus faucibus eros torquent etiam arcu condimentum quis eros adipiscing condimentum massa consectetur ac scelerisque per justo natoque condimentum fermentum elementum ante tempor suspendisse eros.

Laoreet suspendisse a fusce nec urna id platea vitae a torquent consequat consectetur sit metus. Laoreet et quam a enim lorem dictumst et accumsan dui non orci semper nisl consectetur quam urna nulla erat adipiscing malesuada himenaeos condimentum. Sed a nisi elementum eu parturient quisque molestie primis non sed accumsan consectetur ultrices ullamcorper ullamcorper auctor class. Adipiscing sed mus libero natoque iaculis fermentum a suscipit suspendisse platea vestibulum lobortis dapibus in.

Imperdiet parturient nam cubilia pharetra vestibulum penatibus congue parturient sodales porttitor a tortor sit egestas parturient primis platea. Mattis tellus felis donec ipsum nec placerat eros a a habitasse conubia magna condimentum ultrices risus tristique metus convallis hendrerit inceptos leo condimentum sed. Accumsan ante ullamcorper venenatis consectetur sit rhoncus ipsum placerat cras nunc litora a a condimentum id faucibus mus elementum nec consectetur natoque.

Integer a viverra diam aptent blandit parturient sociosqu a nostra tempor malesuada sapien ridiculus sem taciti natoque ullamcorper urna facilisi suspendisse ut adipiscing libero porta neque. Bibendum scelerisque enim malesuada a et consectetur orci torquent mi vivamus maecenas consectetur justo massa semper parturient lectus suspendisse habitasse ut suspendisse ad rutrum. Vestibulum malesuada vulputate posuere a vestibulum per per morbi ac morbi eu hendrerit odio consectetur eget at leo justo. Magna luctus condimentum fermentum rhoncus leo nunc torquent facilisis a sed facilisi vitae consectetur mattis himenaeos eleifend enim ad vestibulum a condimentum arcu ac elementum. Suspendisse dis in lacinia senectus sem vestibulum scelerisque nostra scelerisque libero consequat adipiscing integer taciti praesent quis dui tortor parturient a commodo torquent tristique duis id parturient.

Orci class facilisis habitant etiam aliquet vestibulum ad a quisque aenean a conubia a lobortis vestibulum posuere suspendisse dis vel arcu etiam mollis ad mauris. Id vestibulum praesent cras commodo maecenas pulvinar vel a mattis lorem egestas parturient vestibulum elementum a a morbi commodo vestibulum. Ut convallis a vivamus a id quisque fames id adipiscing hac ad nulla condimentum cum leo mollis mauris montes torquent taciti vestibulum dictumst non ligula. Metus a eget condimentum cursus litora libero ullamcorper elementum dictum ullamcorper penatibus nascetur libero cursus.

Enim ligula fusce montes a erat commodo inceptos sed urna suspendisse eros eget praesent orci senectus sodales a a ad magna mi pretium auctor vestibulum consequat ullamcorper id ad. Posuere a aliquet est taciti a pulvinar torquent netus suspendisse suspendisse duis elementum mi conubia mus fames tellus dignissim ac metus a suspendisse in duis mauris adipiscing parturient. Lorem lobortis conubia proin placerat consectetur vel aptent velit et nostra id ad consectetur eros placerat commodo ullamcorper. A cras ad mattis interdum bibendum ridiculus fusce venenatis per magnis scelerisque in eu ullamcorper condimentum potenti vestibulum. Ultrices scelerisque scelerisque morbi condimentum vestibulum quis felis orci hac vel consectetur vestibulum sit parturient quis a velit mi aptent. Sodales a curabitur potenti eu integer a nisi ullamcorper scelerisque condimentum rhoncus condimentum sed in orci penatibus fames mus laoreet massa.

Blandit velit condimentum lacus parturient aptent netus ac vestibulum adipiscing magnis a est eu et adipiscing. In parturient quam ullamcorper parturient venenatis vel convallis cursus parturient in augue auctor cum enim felis adipiscing mus vulputate. Tincidunt condimentum parturient ad purus adipiscing nec a donec dui est fringilla a mollis torquent a nascetur dictum nunc sit amet. Nullam tempus sit nascetur viverra habitant integer a nec eros pulvinar arcu porta quam sit ipsum tristique. Vestibulum molestie adipiscing elementum a scelerisque risus congue neque eget in a a urna nibh lectus lobortis fermentum donec platea nisl a tellus rutrum feugiat vestibulum parturient sociosqu tempor. Lorem tincidunt netus mollis ridiculus condimentum nisi ullamcorper suspendisse maecenas curae ullamcorper ultrices duis ornare nisi a diam tempus ullamcorper.

Scelerisque a a a a urna a cum et lobortis vestibulum a scelerisque consectetur parturient ridiculus elit metus erat vestibulum non convallis eu tempus tempus id velit. Cum a torquent mus non suspendisse adipiscing platea sapien id nisi luctus id a sed leo conubia ullamcorper rhoncus et nostra a lectus. Hac vestibulum a facilisi vestibulum eu eget a sit fusce tellus dolor eu vestibulum a. Quam parturient dui condimentum ac in parturient erat eu rhoncus leo donec ac fames vestibulum dictumst elementum a et tincidunt adipiscing. Eu viverra odio egestas a integer fames adipiscing vulputate donec diam inceptos parturient in nec luctus a diam a cubilia lorem adipiscing. Sem ac scelerisque lacus penatibus congue duis litora pretium ad curae mus risus diam hac pretium parturient ridiculus ad diam conubia adipiscing nec.

Egestas posuere dignissim netus a parturient consectetur vehicula at aliquam ut torquent pulvinar dapibus cum nam et adipiscing ipsum volutpat per in justo vel suspendisse adipiscing. Eu viverra proin a lacinia lacinia parturient quam hac a parturient sed a sodales risus pharetra urna vestibulum commodo ut potenti adipiscing. Tellus id aliquet a netus at ultricies nostra a faucibus elementum nisl massa a habitant lobortis ultrices a nec porta adipiscing parturient non eleifend metus iaculis parturient sapien scelerisque.

Pulvinar dolor a ullamcorper suspendisse a pharetra eu nulla hac condimentum consectetur congue varius nibh vestibulum ipsum facilisis venenatis. Nam venenatis laoreet parturient at ac nisi taciti scelerisque magna vel pulvinar consectetur netus a vulputate consectetur quisque mus interdum dictum parturient conubia viverra tempor a diam nibh. Ullamcorper congue ullamcorper platea facilisis pretium vestibulum aenean odio facilisis suspendisse suspendisse ad tempus aliquam vestibulum litora nullam dis facilisi ultricies suspendisse neque.

Ultricies tellus neque hac diam urna vestibulum at iaculis accumsan a elit per venenatis hac ullamcorper ullamcorper adipiscing eleifend sodales. Vestibulum vestibulum feugiat a adipiscing ad tempus a condimentum gravida varius sed aliquam a massa ad. Lorem a ultricies parturient vestibulum mus blandit elementum elit at vestibulum ad eros velit scelerisque ullamcorper suspendisse vestibulum per. Sit nulla blandit vel scelerisque a torquent parturient felis facilisis ultricies enim pretium turpis parturient dui eget habitant fermentum nullam. Consectetur eu vulputate aliquet turpis blandit vestibulum condimentum gravida metus primis a ullamcorper consectetur a laoreet condimentum adipiscing sem a consequat adipiscing parturient. Cum purus duis consequat condimentum primis ridiculus eu mi a a consectetur morbi vulputate ut.

A consectetur fames dui semper mi id parturient imperdiet dictum tempus hac consequat pharetra integer justo sed taciti venenatis id erat et. Fames odio vulputate eget habitant porttitor parturient habitasse fames odio ac consequat diam urna hendrerit potenti mauris a. Id tempor ac condimentum neque eu integer vestibulum faucibus habitasse non consectetur elit consectetur suspendisse vestibulum cum consectetur est ac. Leo lacinia parturient tempus a ut adipiscing magna placerat per torquent morbi adipiscing lacinia enim parturient adipiscing vel morbi tellus vestibulum egestas ultricies vestibulum ac. Vestibulum adipiscing habitasse enim molestie nam pretium parturient curabitur mi a vestibulum egestas vestibulum sit parturient id pharetra condimentum posuere eleifend ridiculus odio sociis condimentum malesuada ac a suspendisse. Integer adipiscing eros nam primis sodales a ridiculus nullam taciti curabitur suscipit nam suscipit a fringilla class ut leo euismod et facilisis sed hac nullam tempor fames.

Lobortis per mollis inceptos augue sed congue malesuada odio lacus nam adipiscing ad sem tempor curabitur lorem libero. Risus vestibulum laoreet tempus suscipit a duis amet in risus vitae ullamcorper eleifend vestibulum in mattis leo. Condimentum parturient a et egestas varius parturient nostra a ut lacinia sed a non volutpat felis velit a elementum a neque scelerisque.

Dapibus adipiscing odio dolor nunc odio eu nam urna eu nascetur mi netus natoque dui nascetur ullamcorper dis a laoreet mi a scelerisque justo sociosqu sem ullamcorper mus nisl. Taciti tristique proin quis scelerisque parturient tellus nibh habitant a adipiscing nec a dis parturient vivamus pretium adipiscing. A dictumst dignissim nec netus dui adipiscing platea nascetur primis a hac convallis ad mi per adipiscing libero. Habitasse velit consectetur ut litora integer habitant molestie a rutrum tempor netus enim proin ullamcorper est pretium magna condimentum phasellus commodo vulputate augue faucibus vestibulum mus massa suspendisse diam. Posuere semper penatibus parturient in hac platea in a dis maecenas suspendisse penatibus dapibus senectus torquent venenatis taciti enim ut per ad a urna ultricies libero quisque platea. Ridiculus vestibulum dignissim venenatis phasellus inceptos mollis porttitor maecenas sociis suspendisse a aptent donec parturient vestibulum scelerisque parturient suspendisse.

Tristique venenatis lacus mollis senectus orci ante consectetur nunc a a ullamcorper praesent taciti parturient parturient. Dignissim eget vulputate per ipsum auctor a mi consectetur parturient dui purus taciti parturient interdum eu hac quam mi pretium ut suspendisse quisque. Morbi donec est interdum at odio ullamcorper maecenas a ad vestibulum dictum ac hac varius a hac condimentum senectus euismod a sit a dapibus vestibulum arcu nam vitae vestibulum. Porta integer a mus penatibus adipiscing ut id lacus nullam netus ac parturient dictumst condimentum tempus bibendum imperdiet consectetur vestibulum ut quisque conubia ullamcorper ridiculus ornare duis adipiscing a.

Nisl non imperdiet orci a ullamcorper fermentum vehicula aliquam vestibulum parturient ut faucibus quisque a tellus consectetur. Hac ipsum commodo ut per potenti class orci a at quisque lectus vestibulum posuere nec vestibulum dapibus dui vivamus a suspendisse auctor risus. Condimentum lacus senectus non hendrerit a augue urna dignissim scelerisque quam interdum pretium parturient suspendisse fringilla a a a magna. At a et class consectetur proin himenaeos eget enim mauris cum nam elementum massa eget a in a scelerisque enim mi fringilla mollis leo curabitur dignissim. Sem parturient mollis dis adipiscing at est ornare a a vel parturient mattis ligula fusce a. A condimentum a parturient mus tellus euismod ligula tempor vestibulum magna nisi fringilla condimentum et sit hac semper et dolor.

Luctus tincidunt rhoncus a suspendisse suspendisse duis mi ipsum quam vestibulum quam parturient felis arcu vestibulum sociis ad parturient consequat dis cum quisque blandit facilisis non aenean nascetur. Tempor aptent est a faucibus a suspendisse adipiscing taciti ac vehicula molestie eu dui auctor ante leo tortor placerat hendrerit a ac id vestibulum parturient aliquet ridiculus. Diam lacinia et id cum nunc inceptos ut condimentum adipiscing a interdum proin rhoncus nascetur cubilia bibendum at velit class feugiat. Ante ac maecenas fringilla justo conubia torquent vel volutpat a vestibulum cras condimentum per dis nec. Id condimentum posuere mi et ad a orci eleifend parturient hac mi tellus augue quis arcu eu elit est scelerisque facilisis tempus porttitor amet.

Condimentum sit scelerisque cursus integer ullamcorper sodales parturient donec leo natoque ac sed vivamus molestie. Scelerisque a ad fermentum taciti morbi malesuada et consectetur sit laoreet id mauris sit fermentum. In venenatis ridiculus aliquam a sem nascetur convallis interdum hac accumsan aliquet a dis posuere a a nam velit rutrum.

A a lacinia cum consectetur tristique ad placerat fames dapibus eleifend ridiculus elit parturient sodales suspendisse ultrices vivamus pharetra. Odio mus mus placerat hac a placerat praesent condimentum parturient et fringilla montes ullamcorper sociosqu habitasse tellus diam bibendum a mollis. Nostra massa a dictumst interdum a aliquet scelerisque vestibulum in at dictum aliquet lacus varius non montes. Rhoncus curabitur adipiscing cum rutrum suspendisse purus mi ante volutpat eleifend leo at quam condimentum a condimentum eget eget sodales suspendisse nunc sed laoreet sociosqu est a pharetra.

A suscipit a condimentum consectetur elementum id leo id sed adipiscing consectetur curabitur nisl litora parturient morbi erat vehicula sagittis a ullamcorper rutrum ac. Parturient consectetur hendrerit porttitor enim orci mi eleifend cursus rhoncus nulla suscipit cum at a est morbi. Luctus adipiscing suscipit id leo a in consequat condimentum a vivamus at habitasse turpis ullamcorper.

Netus nunc mauris mi at condimentum nibh praesent vestibulum aliquet suspendisse vestibulum cras vel magna id quisque quis ut. Platea dolor hendrerit parturient morbi imperdiet aliquet consequat gravida sapien a urna parturient quis mi pretium nunc. Consectetur ultricies conubia lorem pretium odio dui consectetur adipiscing ullamcorper accumsan est ultricies quis pretium at metus a parturient malesuada eros dis adipiscing ad. Odio a a dignissim montes nisi suspendisse elit vivamus diam a parturient nullam tincidunt vestibulum aenean eu vestibulum.

Luctus scelerisque maecenas a orci dis platea et in eu a condimentum a scelerisque nec enim nisi massa ullamcorper id magnis est varius a dictum. Eros urna integer condimentum placerat ornare convallis parturient non per nullam ut sociosqu est scelerisque parturient ullamcorper ut. Pharetra ac cursus ac blandit viverra blandit sodales nisl aliquam magnis dui ac scelerisque ut placerat ac ut vestibulum adipiscing bibendum. Ac parturient vestibulum vitae per proin ullamcorper vestibulum parturient conubia vulputate eu semper lacus tincidunt penatibus felis consectetur venenatis suspendisse. Blandit bibendum aliquet vitae conubia vestibulum feugiat laoreet a risus mauris praesent aliquet varius vestibulum cursus. Porta lacus a habitasse dui suspendisse neque ridiculus a scelerisque ut adipiscing sapien hac justo fermentum.

Posuere conubia ante consectetur himenaeos a nisi parturient suspendisse a justo feugiat cum ullamcorper a erat magnis. A elementum cum blandit vestibulum leo a himenaeos torquent pulvinar tristique ad ornare tincidunt adipiscing vestibulum ut platea nunc mus venenatis condimentum hac hendrerit faucibus ullamcorper dolor consectetur. Sapien parturient ullamcorper adipiscing lobortis parturient suscipit congue condimentum torquent est fringilla tristique torquent conubia vel risus a tempor parturient feugiat iaculis magna ac pharetra adipiscing a posuere. Diam dolor montes vestibulum praesent enim tincidunt cubilia facilisis a justo sodales elit metus vestibulum ac primis. Vestibulum a urna nam vivamus eget condimentum mattis dui penatibus nostra augue eu parturient faucibus mi.

Vestibulum non scelerisque suspendisse nam et interdum mollis magna ultricies placerat a cubilia duis penatibus maecenas proin in vulputate ullamcorper. Parturient mi faucibus penatibus gravida elit a massa suspendisse feugiat a inceptos potenti natoque at ad primis congue scelerisque at condimentum. Feugiat cras libero lacus aptent enim sociis semper eu sit pharetra a ullamcorper urna consectetur vestibulum justo a adipiscing tortor tempus erat ad. Congue curae adipiscing condimentum suscipit id hac nam a nostra fermentum senectus nunc maecenas a per elit himenaeos in fringilla eleifend vulputate sagittis cum. Hac aliquet erat nec ac parturient sit id condimentum iaculis nulla venenatis a quis consectetur cum inceptos. Facilisis euismod dis mi vestibulum parturient congue sodales curae parturient fringilla consequat iaculis parturient accumsan.

Conubia condimentum vestibulum parturient ante orci est per mi nascetur amet elementum semper adipiscing consectetur. Dignissim justo id turpis a cursus luctus adipiscing imperdiet proin nam consectetur dis a adipiscing maecenas a. Pulvinar consequat elit sagittis ridiculus adipiscing vel eget vestibulum malesuada conubia rutrum parturient eu commodo dui amet et quisque amet cubilia consectetur hac pretium consectetur. Adipiscing adipiscing at sapien felis id ac vestibulum adipiscing elit nunc lobortis ullamcorper eu vivamus suspendisse dui parturient torquent.

Parturient habitant dis varius massa a sed pulvinar commodo praesent a a a et erat parturient cursus eros pretium ac ipsum ligula lacus nisi ac. Mus litora sociosqu nisi dui vulputate ullamcorper aenean ullamcorper consectetur dolor id id donec eu nullam purus pharetra ultricies adipiscing. Ullamcorper facilisi sit adipiscing ullamcorper a adipiscing arcu adipiscing parturient a a suspendisse ultricies penatibus scelerisque leo proin dolor a dictum fringilla scelerisque suspendisse. Odio parturient ante dignissim commodo luctus diam sagittis tristique ad interdum parturient interdum donec pretium eu viverra quisque a netus imperdiet tincidunt porta urna parturient scelerisque posuere etiam suspendisse. A ac nibh dictum adipiscing et ad cras odio cubilia sagittis turpis curabitur himenaeos litora aenean habitant adipiscing volutpat lobortis neque dictum. Porta ad eu suspendisse senectus est phasellus sagittis fusce quis a imperdiet a leo malesuada fames consectetur eu id nunc dapibus a conubia bibendum feugiat scelerisque.

Quisque scelerisque vestibulum hac commodo tellus metus est fusce a pretium ullamcorper dolor habitasse euismod ullamcorper scelerisque at praesent habitant ut tristique cum vestibulum. Ut ut tempor venenatis est inceptos gravida a non per consectetur magna a parturient eros malesuada vestibulum adipiscing habitant parturient consequat vestibulum facilisi. Et ac eget suspendisse ad odio condimentum parturient parturient habitasse urna vel erat risus ipsum per elit scelerisque a sem adipiscing dui vestibulum neque a feugiat.

Sodales id vestibulum pharetra consequat sit natoque himenaeos parturient ullamcorper scelerisque scelerisque commodo mi erat ut hendrerit rutrum at a eu sem ullamcorper condimentum nec litora. Ut ut sapien lobortis non ligula a sem volutpat ad ridiculus adipiscing natoque molestie vestibulum dis a lorem nostra adipiscing odio per placerat. Ullamcorper donec cursus a imperdiet a taciti ligula integer curabitur ante parturient facilisis odio scelerisque conubia scelerisque nunc arcu fusce vestibulum vestibulum ullamcorper adipiscing imperdiet adipiscing tincidunt ridiculus. A porta massa neque dis luctus a egestas a nascetur torquent vestibulum sociosqu ullamcorper tempus scelerisque dis penatibus euismod tincidunt magna ante parturient. Adipiscing a neque odio metus a etiam ac eleifend facilisis libero ullamcorper nulla dictumst mi lacus ullamcorper neque.

A suspendisse a in ullamcorper ante mus natoque ligula a cursus ad parturient parturient at dictumst mattis est ullamcorper metus arcu fringilla magnis viverra urna a convallis. Egestas libero id nascetur ut magna a in suspendisse luctus himenaeos diam aenean scelerisque pharetra fermentum platea faucibus imperdiet blandit. Eu ullamcorper ligula condimentum a sagittis id turpis blandit adipiscing blandit vestibulum non eget aenean a quisque quam eget.

Aenean tristique ultricies a sociosqu iaculis penatibus a quis adipiscing lorem suspendisse id ridiculus a integer eleifend condimentum feugiat adipiscing consectetur sem quam hac suspendisse taciti dictumst penatibus. Praesent nibh aliquam sed natoque vestibulum ornare dolor sociis hendrerit sit penatibus fusce parturient ad nibh aliquet magna. Interdum ultrices fusce a cubilia tincidunt maecenas id venenatis orci a erat ut a phasellus nulla mus euismod. Consectetur vestibulum ullamcorper lacus a senectus ullamcorper in parturient vitae dui diam a vehicula parturient consequat posuere gravida ipsum vestibulum sit vivamus parturient in dis mi.

Et a per euismod ridiculus per risus ridiculus netus aliquam ornare aptent taciti eros lorem donec a facilisi eu scelerisque venenatis felis varius parturient sed parturient suscipit sodales. Vel quis pulvinar ad convallis duis parturient in adipiscing in quis tincidunt accumsan ultricies eu a purus adipiscing magnis eu nulla morbi in arcu parturient per tristique. Erat risus placerat parturient vestibulum imperdiet sagittis quisque fames adipiscing congue scelerisque facilisis natoque ullamcorper feugiat dis maecenas phasellus. Aliquam purus a pharetra a nascetur libero ut nec venenatis quam ipsum cras leo lorem dui cursus. Ipsum hac nascetur a aenean vitae euismod adipiscing dis non phasellus a consequat adipiscing taciti dolor vestibulum mus platea proin.

Facilisi nam a vestibulum hac placerat inceptos luctus sit elit habitasse vestibulum sociosqu interdum donec scelerisque suspendisse dictumst eu augue a sociis varius. Taciti ornare quisque phasellus in diam a feugiat est consectetur conubia condimentum nisi faucibus enim est proin. Parturient vestibulum at volutpat scelerisque quam pharetra non convallis scelerisque volutpat praesent placerat a sem adipiscing a placerat molestie. Laoreet nascetur volutpat vulputate a eleifend orci cursus venenatis a aliquet integer posuere mi dui risus et himenaeos quisque in elit posuere dignissim.

A faucibus ullamcorper parturient felis natoque feugiat a scelerisque suspendisse luctus scelerisque adipiscing posuere a commodo eget morbi sed. Consectetur enim potenti platea dis iaculis a a eu donec parturient ac adipiscing eget platea himenaeos id tristique id feugiat magna dui adipiscing curabitur consectetur mus consequat eros est. Condimentum a a donec curabitur praesent odio nisi himenaeos dapibus venenatis condimentum id adipiscing a.

Parturient maecenas a curae condimentum porttitor hac morbi aptent eros condimentum a nulla vestibulum porttitor parturient enim id urna viverra nam hac. Netus pulvinar magnis turpis morbi per adipiscing suspendisse commodo tristique venenatis enim a maecenas eget id lacus. A a ultrices a suspendisse vestibulum hendrerit rhoncus praesent consectetur magnis nunc hendrerit etiam at a quam parturient porttitor sit et vestibulum ac adipiscing a. Tortor condimentum nec parturient posuere a cras a mi scelerisque diam aliquam eget convallis felis ullamcorper scelerisque.
            </div>
          </div>

          <footer>
            <div>2017, created by Peter Krevenets</div>
          </footer>

        </div>

        {/* <div className="help-button">
          <i className="fa fa-question" aria-hidden="true"></i>
        </div> */}

      </div>
    );
  }

}

App.propTypes = {
  textCurrent: PropTypes.string,
  isShowingHelp: PropTypes.bool,
  enterText: PropTypes.func,
  showHelp: PropTypes.func,
};


const mapStateToProps = (state) => ({
  textCurrent: state.textCurrent,
  isShowingHelp: state.isShowingHelp,
});

export default connect(mapStateToProps, actions)(App);
