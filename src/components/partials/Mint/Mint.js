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
            placeholder="NUMBER OF COPIES"/>
        </div>
    }
    function nftDescInput(formProps){
        return <div>
            <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}
            className="nft-desc"
            placeholder="DESCRIPITON"/>
        </div>
    }
    function nftNameInput(formProps){
        return <div>
            <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}
            className="nft-name"
            placeholder="NFT NAME" />
        </div>
    }
    function nftPriceInput(formProps){
        return <div>
            <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}
            className="nft-mint-price"
            placeholder="PRICE" />
        </div>
    }
    function nftPatronageInput(formProps){
        return <div>
            <input
            onChange={formProps.input.onChange}
            value={formProps.input.value}
            className="nft-mint-patronage"
            placeholder="PATRONAGE" />
        </div>
    }

    return(
        <div>
            <Modal 
                isOpen={modalUploadIsOpen}
                style={connectModal} >

                    <div className="title-mint">
                        Mint your nft
                    </div>
                    <div className="modal-nav">
                        <span onClick={addUpload} className={uploadActive} >Upload your nFT →</span>
                        <span onClick={addInfo} className={infoActive} >Add info →</span>
                        <span onClick={addCollection} className={collectionActive} >Add to collection → </span>
                        <span onClick={addPrice} className={priceActive} > Add Price and Patronage →</span>
                    </div>
                    
                    <div className="nft-droparea">
                        <form>
                        <Field name="nftimage" component={renderInput}>                        </Field>


                        <div className="nft-droparea-desc">
                        Drag and Drop your NFT content
                        </div>

                        <div className="allowed-formats">
                            <span className="format">
                                MP3
                            </span>
                            <span className="format">
                                JPEG
                            </span>
                            <span className="format">
                                PNG
                            </span>
                            <span className="format">
                                GIF
                            </span>
                            <span className="format">
                                MP4
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
                        Mint your nft
                    </div>
                    <div className="modal-nav">
                        <span onClick={addUpload} className={uploadActive} >Upload your nFT →</span>
                        <span onClick={addInfo} className={infoActive} >Add info →</span>
                        <span onClick={addCollection} className={collectionActive} >Add to collection → </span>
                        <span onClick={addPrice} className={priceActive} > Add Price and Patronage →</span>
                    </div>
                    <div className="nft-info">
                        <Field name="nft-name" component={nftNameInput}></Field>
                        <Field name="nft-desc" component={nftDescInput}></Field>
                        <Field name="nft-copies" component={nftCopiesInput}></Field>
                    </div>
                    <div className="button-next" onClick={addCollection}>
                            Next
                    </div>


            </Modal>

            <Modal 
            isOpen={modalCollectionIsOpen}
            style={connectModal}>

                    <div className="title-mint">
                        Mint your nft
                    </div>
                    <div className="modal-nav">
                        <span onClick={addUpload} className={uploadActive} >Upload your nFT →</span>
                        <span onClick={addInfo} className={infoActive} >Add info →</span>
                        <span onClick={addCollection} className={collectionActive} >Add to collection → </span>
                        <span onClick={addPrice} className={priceActive} > Add Price and Patronage →</span>
                    </div>
                    <div className="collections">
                        <span>
                            <svg width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="186" height="186" rx="50" fill="#F0F1F9"/>
                            </svg>
                        </span>
                        <span>
                            <svg width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="186" height="186" rx="50" fill="#F0F1F9"/>
                            </svg>

                        </span>
                        <span>
                            <svg width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="186" height="186" rx="50" fill="#F0F1F9"/>
                            </svg>

                        </span>
                        <span>
                            <svg width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="186" height="186" rx="50" fill="#F0F1F9"/>
                            <path d="M86.1086 129.15C86.1086 131.359 87.8995 133.15 90.1086 133.15H95.7416C97.9507 133.15 99.7416 131.359 99.7416 129.15V103.891C99.7416 101.682 101.532 99.8914 103.742 99.8914H129C131.209 99.8914 133 98.1005 133 95.8914V90.2584C133 88.0493 131.209 86.2584 129 86.2584H103.742C101.532 86.2584 99.7416 84.4676 99.7416 82.2584V57C99.7416 54.7909 97.9507 53 95.7416 53H90.1086C87.8995 53 86.1086 54.7909 86.1086 57V82.2584C86.1086 84.4676 84.3178 86.2584 82.1086 86.2584H57C54.7909 86.2584 53 88.0493 53 90.2584V95.8914C53 98.1005 54.7909 99.8914 57 99.8914H82.1086C84.3178 99.8914 86.1086 101.682 86.1086 103.891V129.15Z" fill="white"/>
                            </svg>  
                        </span>
                    </div>
                    <div className="button-next" onClick={addPrice}>
                            Next
                    </div>


        </Modal>
        <Modal 
            isOpen={modalPriceIsOpen}
            style={connectModal}>
                    <div className="title-mint">
                        Mint your nft
                    </div>
                    <div className="modal-nav">
                        <span onClick={addUpload} className={uploadActive} >Upload your nFT →</span>
                        <span onClick={addInfo} className={infoActive} >Add info →</span>
                        <span onClick={addCollection} className={collectionActive} >Add to collection → </span>
                        <span onClick={addPrice} className={priceActive} > Add Price and Patronage →</span>
                    </div>
                    <div className="nft-pricing">
                        <Field name="nft-price" component={nftPriceInput}></Field>
                        <Field name="nft-patronage" component={nftPatronageInput}></Field>
                    </div>
                    <Link to="/profile" className="text-link">  
                    <div className="button-next" onClick={addCollection}>
                            Mint
                    </div>
                    </Link>

        </Modal>
    </div>
    )
}
export default reduxForm({
    form: 'mintForm'
})(Mint);