import 'scss/quote/quote.css'

const Quote = () => {
    return (
        <div className='damarket'>
            {/* Request-Quotation-START */}
            <section className='container-fluid request-quotation'>
                <div className='container'>
                    <div className='row position-relative'>
                        <div className='col-sm-12'>
                            <div className='req-content'>
                                <div className='req-content-inn'>
                                    <h2>Confused about prices? Let us help you...!</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='req-form'>
                                <h2>One Request, Multiple Quotes</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder='What are you looking for' />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder='Quantity' />
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-select">
                                            <option>Pieces</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn w-100">Request for Quotation</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Request-Quotation-END */}
        </div>
    )
}

export default Quote