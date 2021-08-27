import React from 'react'
import Modal from 'react-modal'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import './Mint.css'

function  Mint() {
    const connectModal = {
        content:{
            position: 'absolute',
            width: '1339px',
            height: '650px',
            borderColor: 'white',
            boxShadow: '0px 4px 94px rgba(0, 0, 0, 0.09)',
            borderRadius: '30px',
            margin: '0 auto',
            align: 'center'
        }
    }


    const [uploadActive, setUploadActive] = React.useState('active');
    const [infoActive, setInfoActive] = React.useState(null);
    const [collectionActive, setCollectionActive] = React.useState(null);
    const [priceActive, setPriceActive] = React.useState(null);

    const [modalUploadIsOpen, setUploadIsOpen] = React.useState(true);
    const [modalInfoIsOpen, setInfoIsOpen] = React.useState(false);
    const [modalCollectionIsOpen, setCollectionIsOpen] = React.useState(false);
    const [modalPriceIsOpen, setPriceIsOpen] = React.useState(false);


    function addUpload(){
        setUploadIsOpen(true);
        setCollectionIsOpen(false);
        setInfoIsOpen(false);
        setPriceIsOpen(false);
        setInfoActive(null);
        setPriceActive(null)
        setCollectionActive(null)
        setUploadActive('active')


    }
    function addInfo(){
        setUploadIsOpen(false);
        setPriceIsOpen(false);
        setCollectionIsOpen(false);
        setInfoIsOpen(true);
        setUploadActive(null);
        setCollectionActive(null)
        setPriceActive(null)
        setInfoActive('active')
    }
    function addCollection(){
        setInfoIsOpen(false);
        setUploadIsOpen(false);
        setPriceIsOpen(false);
        setCollectionIsOpen(true);
        setInfoActive(null);
        setPriceActive(null)
        setUploadActive(null)
        setCollectionActive('active')
    }
    function addPrice(){
        setCollectionIsOpen(false);
        setUploadIsOpen(false);
        setInfoIsOpen(false);
        setPriceIsOpen(true);
        setCollectionActive(null);
        setUploadActive(null)
        setInfoActive(null);
        setPriceActive('active')

    }
    function finishMint(){
        setPriceIsOpen(true);
    }
    function renderInput(formProps){
        return <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}/>
    }
    function nftCopiesInput(formProps){
        return <div>
            <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}
            className="nft-copies"
            placeholder="Link to Content"/>
        </div>
    }
    function nftDescInput(formProps){
        return <div>
            <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}
            className="nft-desc"
            placeholder="DESCRIPITON - What will the subscriber get"/>
        </div>
    }
    function nftNameInput(formProps){
        return <div>
            <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}
            className="nft-name"
            placeholder="CONTENT TITLE" />
        </div>
    }
    function nftPriceInput(formProps){
        return <div>
            <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}
            className="nft-mint-price"
            placeholder="SUBSCRIPTION MONTHLY PRICE, ETH" />
        </div>
    }
    function nftPatronageInput(formProps){
        return <div>
            <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}
            className="nft-mint-patronage"
            placeholder="MINIMUM SUBSCRIPTIOn, NUMBER OF DAYS " />
        </div>
    }

    return(
        <div>
            <Modal 
                isOpen={modalUploadIsOpen}
                style={connectModal} >

                    <div className="title-mint">
                        Create  subscription offer
                    </div>
                    <div className="modal-nav">
                    <span onClick={addUpload} className={uploadActive} >Subscription image → </span>
                        <span onClick={addInfo} className={infoActive} >Add info →</span>
                        <span onClick={addPrice} className={collectionActive} >Subscription price → </span>
                    </div>
                    
                    <div className="nft-droparea">
                        <form>
                        <Field name="nftimage" component={renderInput}>                        </Field>


                        <div className="nft-droparea-desc">
                            Drag and Drop your NFT content image
                        </div>

                        <div className="allowed-formats">
                            <span className="format">
                                JPEG
                            </span>
                            <span className="format">
                                PNG
                            </span>
                            <span className="format">
                                GIF
                            </span>
                        </div>
                        </form>

                    </div>

                    <div className="button-next" onClick={addInfo}>
                            Next
                    </div>
            </Modal>

            <Modal 
            isOpen={modalInfoIsOpen}
            style={connectModal}>

                    <div className="title-mint">
                        Create Subscription Offer
                    </div>
                    <div className="modal-nav">
                        <span onClick={addUpload} className={uploadActive} >Subscription image → </span>
                        <span onClick={addInfo} className={infoActive} >Add info →</span>
                        <span onClick={addPrice} className={collectionActive} >Subscription price → </span>
                    </div>
                    <div className="nft-info">
                        <Field name="nft-name" component={nftNameInput}></Field>
                        <Field name="nft-desc" component={nftDescInput}></Field>
                        <Field name="nft-copies" component={nftCopiesInput}></Field>
                    </div>
                    <div className="button-next" onClick={addPrice}>
                            Next
                    </div>


            </Modal>
            <Modal 
            isOpen={modalPriceIsOpen}
            style={connectModal}>
                    <div className="title-mint">
                        Create Subscription Offer
                    </div>
                    <div className="modal-nav">
                    <span onClick={addUpload} className={uploadActive} >Subscription image → </span>
                        <span onClick={addInfo} className={infoActive} >Add info →</span>
                        <span onClick={addPrice} className={collectionActive} >Subscription price → </span>
                    </div>
                    <div className="nft-pricing">
                        <Field name="nft-price" component={nftPriceInput}></Field>
                        <Field name="nft-patronage" component={nftPatronageInput}></Field>
                    </div>
                    <Link to="/profile" className="text-link">  
                    <div className="button-next" onClick={addCollection}>
                            Create 
                    </div>
                    </Link>

        </Modal>

    </div>
    )
}
export default reduxForm({
    form: 'mintForm'
})(Mint);