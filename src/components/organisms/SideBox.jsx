import sideboxcss from "./SideBox.module.scss";

export const SideBox = () => {
  return (
    <div className={sideboxcss.sideBox}>
        <h3>アメリカ（ロサンゼルス）</h3>
        <h3>韓国</h3>
        <h3>パリ</h3>
        <h3>ロシア</h3>
        <h3>タイ</h3>
        <h3>+ 国名を追加する</h3>
    </div>
  )
}
